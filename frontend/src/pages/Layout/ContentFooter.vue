<template>
    <footer class="footer">
        <div v-if="footer" class="container">
            <nav>
                <ul>
                    <li>
                        <a href="https://creative-tim.com/presentation">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="http://blog.creative-tim.com">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="https://www.creative-tim.com/license">
                            Licenses
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>
<script>
export default {
  data () {
    return {
      footer: false
    }
  }
}
</script>
<style></style>
