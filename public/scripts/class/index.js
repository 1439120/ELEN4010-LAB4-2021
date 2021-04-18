'use strict'

fetch('/class/api/list') // Returns a Promise for the GET request
  .then(function (response) {
    // Check if the request returned a valid code
    if (response.ok) {
      return response.json()
    } // Return the response parse as JSON if code is valid
    else { throw 'Failed to load classlist: response code invalid!' }
  })
  .then(function (data) { // Display the JSON data appropriately
    // Retrieve the classList outer element
    const classList = document.getElementById('classList')
    // Iterate through all students
    data.forEach(function (student) {
      // Create a new list entry
      const li = document.createElement('LI')
      const liText = document.createTextNode(student.name + ' - ' + student.stdnum + ' - ' + student.course)
      // Append the class to the list element
      li.className += 'student'
      // Append list text to list item and list item to list
      li.appendChild(liText)
      classList.appendChild(li)
    })

    const but = document.getElementById('addStudentButton')
    but.className = 'btn-primary'
    // // add a new student
    // const addButton = document.getElementById('button')
    // if (addButton) {
    //   addButton.addEventListener('click', () => {
    //     const StudName = document.getElementById('newStudentInput').value
    //     // data.push({ name: StudName, stdnum: '**********', course: '**********' })
    //     /* ************************* */
    //     const li = document.createElement('LI')
    //     const liText = document.createTextNode(StudName + ' - ' + '**********' + ' - ' + '**********')
    //     // Append the class to the list element
    //     li.className += 'student'
    //     // Append list text to list item and list item to list
    //     li.appendChild(liText)
    //     classList.appendChild(li)
    //   }, false)
    // }
  })
  .catch(function (e) { // Process error for request
    alert(e) // Displays a browser alert with the error message.
    // This will be the string thrown in line 7 IF the
    // response code is the reason for jumping to this
    // catch() function.
  })
