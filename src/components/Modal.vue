<template lang="pug">
transition(name="modal-fade")
  .modal-backdrop
    .modal(role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription")
      header#modalTitle.modal-header
        slot(name="header") This is the default tile!
        button.btn-close(type="button" @click="close" aria-label="Close modal")
          i.fa.fa-close
      section#modalDescription.modal-body
        slot(name="body") This is the default body!
      footer.modal-footer
        slot(name="footer") This is the default footer!
</template>


<script>
export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>