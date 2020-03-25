<script>
</script>

<style lang="scss">
    #profile {
        width: 50vw;
        height: 330px;
        font-family: 'Tomorrow', sans-serif;

        display: flex;
        justify-content: space-evenly;

        img {
            width: 256px;
            height: 256px;
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }

        #profile-info {
            text-align: right;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                font-size: 36pt;
                font-weight: 100;
                margin: 0;
            }

            a {
                font-family: 'Poppins', sans-serif;
                text-decoration: none;
                color: black;

                &:hover {
                    color: red;
                }
            }
        }
    }
</style>

<div id="profile">
    <img src="profile.jpg">
    <div id="profile-info">
        <h1>CHRISTOPHER LACHANCE</h1>
        <a href="mailto:christopher.t.lachance@gmail.com">christopher.t.lachance@gmail.com</a>
        <a href="https://github.com/CTLaChance">https://github.com/CTLaChance</a>
        <a href="https://www.linkedin.com/in/ctlachance">https://www.linkedin.com/in/ctlachance</a>
    </div>
</div>