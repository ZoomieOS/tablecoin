<template lang="pug">
footer.footer
  .footer-inner
    section.author
      p My personal page:
      a(href="https://www.linkedin.com/in/olegboreiko/")
        i.fa-brands.fa-linkedin
      a(href="https://www.facebook.com/therealzoomie/")
        i.fa-brands.fa-facebook-square
      a(href="https://github.com/ZoomieOS")
        i.fa-brands.fa-github-square
</template>

<style lang="scss" scoped>
.author {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  * {
    margin-right: 10px;
  }

  i {
    font-size: 32px;
  }
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f2f2f2;
  color: #616161;
  font-size: 12px;
  padding: 20px 0;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer {
  div {
    display: flex;
    align-items: center;

    i {
      margin-right: 10px;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    margin-right: 30px;
    margin-bottom: 20px;
  }
}
</style>
