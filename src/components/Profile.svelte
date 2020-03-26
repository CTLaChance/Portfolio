<script>
</script>

<style lang="scss">
    #profile {
        width: 50vw;
        height: 362px;
        font-family: 'Tomorrow', sans-serif;

        display: flex;
        justify-content: flex-end;

        padding: 16px;
        margin: 0 auto;
        box-sizing: border-box;

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

            margin-left: 16px;

            h1 {
                font-size: 36pt;
                font-weight: 100;
                margin: 0;
            }

            a {
                font-family: 'Roboto', sans-serif;
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
    <img src="profile.jpg" alt="Christopher LaChance - Profile Picture">
    <div id="profile-info">
        <h1>CHRISTOPHER LACHANCE</h1>
        <a href="https://github.com/CTLaChance">GitHub</a>
        <a href="https://linkedin.com/in/ctlachance">LinkedIn</a>
        <a href="mailto:christopher.t.lachance@gmail.com">Email</a>
        <a href="./resume.pdf">Résumé</a>
    </div>
</div>