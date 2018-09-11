<template>
  <div class="comments-overlay">

    <div class="comments-overlay__container" v-for="comment in target.comments" :key="comment.id" :style="getCommentPostition(comment)">
      <button class="comments-overlay__indicator" v-if="editting != comment" @click="onIndicatorClick(comment)">
        {{ comment.commenter.initials }}
      </button>
      <div v-else class="comments-overlay__form">
        <p>{{ getCommentMetaString(comment) }}</p>
        <textarea ref="text" v-model="text" />        
        <button @click="edit" :disabled="!text">Save</button>
        <button @click="cancel">Cancel</button>
        <button @click="remove">Remove</button>
      </div>
    </div>

    <div class="comments-overlay__form" v-if="this.creating" :style="getCommentPostition(this.creating)">
      <textarea ref="text" v-model="text" />
      <button @click="create" :disabled="!text">Save</button>
      <button @click="cancel">Cancel</button>
    </div>

  </div>
</template>

<script>
export default {
  props: ['target'],

  data() {
    return {
      text: null,
      editting: null,
      creating: null
    };
  },

  methods: {
    onTargetClick(payload) {
      this._resetState();
      const rect = this.target.getRect();

      this.creating = {
        id: payload.id,
        targetId: this.target.id,
        commenter: payload.commenter,
        ratioX: (payload.clientX - rect.left) / rect.width,
        ratioY: (payload.clientY - rect.top) / rect.height
      };
    },
    onIndicatorClick(comment) {
      this._resetState();
      this.text = comment.text;
      this.editting = comment;
    },
    getCommentPostition(comment) {
      const rect = this.target.getRect();
      const x = comment.ratioX * rect.width + rect.left;
      const y = comment.ratioY * rect.height + rect.top;
      return { left: `${x}px`, top: `${y}px` };
    },
    getCommentMetaString(comment) {
      return `${
        comment.commenter.fullName
      } - ${comment.timestamp.getMonth()}/${comment.timestamp.getDate()}/${comment.timestamp.getFullYear()}`;
    },
    edit() {
      this.editting.text = this.text;
      this.editting.timestamp = new Date();
      this._emit("edit", this.editting);
      this._resetState();
    },
    create() {
      this.creating.text = this.text;
      this.creating.timestamp = new Date();
      this._emit("create", this.creating);
      this._resetState();
    },
    cancel() {
      this._resetState();
    },
    remove() {
      this._emit("remove", this.editting);
      this._resetState();
    },
    _emit(evt, data) {
      this.$root.$emit(evt, data);
    },
    _resetState() {
      this.text = null;
      this.editting = null;
      this.creating = null;
    }
  },

  mounted() {
    this.$root.$on(`commentTargetClicked__${this.target.id}`, this.onTargetClick
    );
  },

  beforeDestroy() {
    this.$root.$off(`commentTargetClicked__${this.target.id}`, this.onTargetClick
    );
  }
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
}

.comments-overlay {
  position: absolute;
  top: 0px;
  left: 0px;

  &__form {
    position: absolute;
  }

  &__container {
    position: absolute;
  }

  &__indicator {
    z-index: 1;
    display: block;
    background-color:#f6e770;
    font-weight: bold;
    border-radius: 0 1rem 1rem 1rem;
    border: none;
    height: 2rem;
    width: 2rem;
  }

  &__form {
    z-index: 1;
    background-color:#f6e770;
    padding: 1rem;
    border-radius: 0 1rem 1rem 1rem;
    border: none;

    p {
      padding: 0;
      margin: 0 0 1rem 0;
    }

    textarea {
      margin: 0 0 1rem 0;
      width: 25rem;
      height: 8rem;
    }
  }
}
</style>