<template>
  <div>
    <ul class="list">
      <li v-for="item in fetchedList" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0}}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="title">
            <!-- 타이틀 분기(url or item/) -->
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <!-- 스몰영역 분기(user or domain) -->
            <router-link v-if="item.user" v-bind:to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
            <a v-else :href="item.url">
              {{ item.domain }} 
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchedList']),
  },
}
</script>

<style scoped>
.list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>