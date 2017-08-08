function deleteNote(e) {
  e.preventDefault()
  console.log('delete it!')
  axios
    .delete(this.action)
    .then(res => {
      console.log('The result in Axios', res)
    })
    .catch(console.error)
}

export default deleteNote