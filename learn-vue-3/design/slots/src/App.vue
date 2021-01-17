<template>
  <div>
    <ul>
        <item/>
        <item>
          아이템 1
        </item>
        <item>
          아이템 2 <button>click me</button>
        </item>
        <item>
          <div>
            아이템 3
          </div>
            <img src="./assets/endgame.png" alt="어벤저스" width="300">
        </item>
        <item>
          <div style="font-size:30px; color:blue">아이템 4</div>
        </item>
        <!-- DOM 구조, 스타일을 마음대로 정의 가능 -->
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