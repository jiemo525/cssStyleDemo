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
            <h2>渐变色文本</h2>
            <div class="discoloration-text">
                <code>background-image: linear-gradient(135deg, deeppink, dodgerblue);</code>
                <code>background-clip: text;</code>
                <code> -webkit-background-clip: text;</code>
                <code>box-decoration-break: clone;</code>
                <code>-webkit-box-decoration-break: clone;</code>
                <code>color: transparent;</code>
                <p>这里涉及到了几个css3属性</p>
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
        name: "DiscolorationText"
    };
</script>

<style scoped lang='scss' type="text/css">
    .home {
        background: url("../assets/banner.jpg") no-repeat 100% top;
        //  background: url("./assets/banner-bottom.jpg") no-repeat 100% bottom;
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
            // background: url("../assets/banner-bottom.jpg") no-repeat 100% bottom;
            width: 1000px;
            margin: 0 auto;
            height: 800px;
            background-color: rgba(255, 255, 255, 0.5);
            h2 {
                font-size: 26px;
                color: rgba(162, 172, 82, 0.8);
                text-align: center;
                padding: 10px 0 30px;
            }
            .discoloration-text {
                padding: 20px;
                p {
                    color: #444;
                    text-align: center;
                }
                code {
                    display: block;
                    padding: 0.5em;
                    background: #002b36;
                    color: #839496;
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
