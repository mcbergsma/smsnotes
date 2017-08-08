function deleteNote(e) {
  e.preventDefault()
  axios
    .delete(this.action)
    .then(res => {
      this.parentElement.remove()
    })
    .catch(console.error)
}


const deleteForms = document.querySelectorAll('form.delete')
Array.from(deleteForms).map( form => {
  form.addEventListener('submit', deleteNote)
})
