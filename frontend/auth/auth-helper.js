const auth = {
  authenticate(jwt, cb) {
    if(typeof window !== "undefined") {
      sessionStorage.setItem('jwt', JSON.stringify(jwt))
    }
    cb()
  }
}

export default auth