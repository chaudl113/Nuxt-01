<template>
  <div modal="true">
    <div>
      <div v-if="visible" :data-modal="name" class="modal">
        <div
          aria-modal="true"
          data-reach-dialog-content="true"
          tabindex="-1"
          class="modal__mask"
        >
          <div class="modal__body">
            <slot :payload="payload" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VModal from './handle'
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      payload: null,
      visible: false,
    }
  },
  beforeMount() {
    VModal.EventBus.$on('open', (params) => {
      // eslint-disable-next-line no-console
      if (this.name === params.name) {
        this.show(params)
      }
    })
    VModal.EventBus.$on('close', (params) => {
      if (this.name === params.name) {
        this.close(params)
      }
    })
  },
  methods: {
    show(params) {
      this.payload = params.payload
      this.visible = true
    },
    close() {
      this.visible = false
    },
  },
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  // align-items: center;
  justify-content: center;
  background-color: rgba(18, 18, 18, 0.8);
  color: #333;
  z-index: 999;
  padding-top: 20px;
  padding-bottom: 10px;
  .modal__mask {
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    .modal__mask {
      width: 90%;
    }
  }
}
</style>
