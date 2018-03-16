<template>
  <div class="home">
    <div class='banner'>
      <div class='banner-content'>
        <div class='logo'><img src="../assets/logo.jpeg" /></div>
        <div class='banner-link'>
          <router-link to='/'><span>首页</span></router-link>
          <router-link to='/about'><span>关于</span></router-link>
          <router-link to='/technology'><span>技术</span></router-link>
        </div>
      </div>
    </div>
    <div class='content'>
      <h2>css样式例子</h2>
      <div class='cards'>
        <router-link to='/discoloration-text'>
          <div class='card card1'>
            <p>渐变色文本</p>
          </div>
        </router-link>
        <div class='card card2'>
          <router-link to='/underline'>
            <div class='link-flip'>
              <p>111<a>下划线样式</a>222</p>
            </div>
          </router-link>
        </div>
      </div>
  
    </div>
    <div class='footer'>
      <div class='info'>11111111111</div>
      <div class='foot'>
        footer
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style scoped lang='scss' type="text/css">
.home {
  background: url("../assets/banner-top.jpg") no-repeat 100% top #ddd;
  .banner {
    height: 70px;
    display: flex;
    .banner-content {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      .banner-link {
        width: 800px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
    .logo {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    a {
      color: #fff;
    }
    span {
      padding: 10px 20px;
      font-size: 18px;
      &:hover {
        color: #51e5db;
      }
    }
  }
  .content {
    width: 1000px;
    margin: 0 auto;
    height: 800px;
    background-color: rgba(255, 255, 255, 0.5);
    h2 {
      font-size: 26px;
      color: #00a3cf;
      text-align: center;
      padding: 10px 0 30px;
    }
    .cards {
      display: flex;
      flex-direction: row;
    }
    .card {
      width: 300px;
      height: 100px;
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 4px;
      text-align: center;
      padding: 20px;
      display: flex;
      flex-direction: column;
      margin: 10px;
    }
    .card1 {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        display: flex;
        font-size: 2em;
        background-image: linear-gradient(135deg, deeppink, dodgerblue);
        background-clip: text;
        -webkit-background-clip: text;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
        color: transparent;
      }
    }
    .card2 {
      a {
        width: 100%;
        height: 100%;
      }
      .link-flip {
        background: rgba(149, 165, 166, 0.2);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          display: flex;
          word-spacing: 2em;
          font-size: 2em;
        }
        a {
          position: relative;
          display: inline-block;
          outline: none;
          color: #404d5b;
          vertical-align: bottom;
          text-decoration: none;
          white-space: nowrap;
          margin: 0 5px;
        }
      }

      .link-flip a {
        font-weight: 500;
        -webkit-transition: color 0.3s;
        transition: color 0.3s;
        -webkit-perspective: 600px;
        perspective: 600px;
        -webkit-perspective-origin: 50% 100%;
        perspective-origin: 50% 100%;
      }
      .link-flip a:hover,
      .link-flip a:focus {
        color: #e74c3c;
      }
      .link-flip a::before,
      .link-flip a::after {
        position: absolute;
        top: 0;
        left: -4px;
        z-index: -1;
        box-sizing: content-box;
        padding: 0 4px;
        width: 100%;
        height: 100%;
        content: "";
      }
      .link-flip a::before {
        background-color: #fff;
        -webkit-transition: -webkit-transform 0.2s;
        transition: transform 0.2s;
        -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
        transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
        -webkit-transform: rotateX(90deg);
        transform: rotateX(90deg);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
      }
      .link-flip a:hover::before,
      .link-flip a:focus::before {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
      }
      .link-flip a::after {
        border-bottom: 2px solid #fff;
      }
    }
  }
  .footer {
    .info {
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background: #d4d4d4;
    }
    .foot {
      color: #fff;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #333;
    }
  }
}
</style>
