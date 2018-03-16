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
            <h2>下划线样式</h2>
            <div class="underline">
                <p>样式demo</p>
                <pre></pre>
                <blockquote>https://tympanus.net/Development/InlineAnchorStyles/</blockquote>
                
    
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
        name: "Underline"
    };
</script>

<style scoped lang='scss' type="text/css">
    .home {
        background: url("../assets/banner.jpg") no-repeat 100% top #ddd;
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
                    color: #00a3cf;
                }
            }
        }
        .content {
            width: 1000px;
            margin: 0 auto;
            min-height: 800px;
            background-color: rgba(255, 255, 255, 0.5);
            h2 {
                font-size: 26px;
                color: #00a3cf;
                text-align: center;
                padding: 10px 0 30px;
            }
            .underline {
                padding: 30px;
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
