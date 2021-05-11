<template>
  <div class="header">
    <div class="header__left">
      <div class="header__left-title">
        <h2>Adira Customer Information</h2>
      </div>
    </div>
    <div class="header__right">
      <div class="header__right-user">
        <span>Hi, Wisnu </span><span class="caret"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  padding: 25px;
  display: flex;
  height: 95px;
  flex-direction: row;
  justify-content: space-between;
}

.header .header__left .header__left-title h2 {
  font-weight: bold;
}

.header__right {
  width: 250px;
  text-align: end;
}

.header__right .header__right-user span {
  font-size: 1.25rem;
}
</style>
