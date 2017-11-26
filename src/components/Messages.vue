<template>
  <div class="message-history">
    <message v-for="message in messages"
             :key="1"
             :message="message">
    </message>
  </div>
</template>

<script>
import Message from './Message'
export default {
    props: ['messages'],
    components: {
      Message
    }
  }
</script>
