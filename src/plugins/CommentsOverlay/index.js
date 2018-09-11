import Vue from 'vue'
import CommentsRootContainer from './CommentsRootContainer'
import { uuid } from './helpers'

const optionsDefaults = {
    // Retrieves the current logged in user that is posting a comment
    commenterSelector() {
        return {
            id: null,
            fullName: 'Anonymous',
            initials: '--',
            email: null
        }
    },
    data: {
        // Hash object of all elements that can be commented on
        targets: {},
        onCreate(created) {
            this.targets[created.targetId].comments.push(created)
        },
        onEdit(editted) {
            // This is obviously not necessary
            // It's there to illustrate what could be done in the callback of a remote call
            let comments = this.targets[editted.targetId].comments
            comments.splice(comments.indexOf(editted), 1, editted);
        },
        onRemove(removed) {
            let comments = this.targets[removed.targetId].comments
            comments.splice(comments.indexOf(removed), 1);
        }
    }
}

export default {
    install(vue, opts) {

        // Merge options argument into options defaults
        const options = { ...optionsDefaults, ...opts }

        // Create plugin's root Vue instance
        const root = new Vue({
            data: { targets: options.data.targets },
            render: createElement => createElement(CommentsRootContainer)
        })

        // Mount root Vue instance on new div element added to body
        root.$mount(document.body.appendChild(document.createElement('div')))

        // Register Vue event handlers on root instance
        root.$on('create', options.data.onCreate)
        root.$on('edit', options.data.onEdit)
        root.$on('remove', options.data.onRemove)

        // Make the root instance available in all components
        vue.prototype.$commentsOverlay = root

        // Register custom directive tha enables commenting on any element
        vue.directive('comments-enabled', {
            bind(el, binding) {

                // Add this target entry in root instance's data
                root.$set(
                    root.targets,
                    binding.value,
                    {
                        id: binding.value,
                        comments: [],
                        getRect: () => el.getBoundingClientRect(),
                    });

                el.addEventListener('click', (evt) => {
                    root.$emit(`commentTargetClicked__${binding.value}`, {
                        id: uuid(),
                        commenter: options.commenterSelector(),
                        clientX: evt.clientX,
                        clientY: evt.clientY
                    })
                })
            }
        })
    }
}