<template>
  <div>
    <ul>
      <item>아이템 1</item>
      <item>
        <div>
          아이템 2
          <button>click me</button>
        </div>
        <img src="./assets/endgame.png" alt="엔드게임"
          height="50px" width="50px">
        </item>
      <item>
        <div>아이템 3</div>
      </item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
}
</script>