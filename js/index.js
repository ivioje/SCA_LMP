function validate () {
      let fnameMsg, lnameMsg, emailMsg, companyMsg, textMsg, radioMsg, aboutMsg,radioBtns;

  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  let dom = document.form

  let msgs = [
    'please enter a valid name',
    'email should be of the form - youremail@example.com',
    'please enter a company name',
    'message is too short',
    'please select a budget',
    "We'd love your feedback!"
  ]

  fnameMsg = document.querySelector('.fnameMsg')
  lnameMsg = document.querySelector('.lnameMsg')
  emailMsg = document.querySelector('.emailMsg')
  companyMsg = document.querySelector('.companyMsg')
  textMsg = document.querySelector('.txtMsg')
  radioMsg = document.querySelector('.radioMsg')
  radioBtns = document.querySelector('.radio label')
  aboutMsg = document.querySelector('.aboutMsg')

  if (dom.fname.value == '') {
    fnameMsg.innerHTML = msgs[0]
    dom.fname.focus()
    return false
  } else if (dom.lname.value == '') {
    lnameMsg.innerHTML = msgs[0]
    dom.lname.focus()
    return false
  } else if (dom.email.value == '' || !emailRegExp.test(email.value)) {
    emailMsg.innerHTML = msgs[1]
    dom.email.focus()
    return false
  } else if (dom.company.value == '') {
    companyMsg.innerHTML = msgs[2]
    dom.company.focus()
    return false
  } else if (dom.message.value == '' || dom.message.value.length < 30) {
    textMsg.innerHTML = msgs[3]
    dom.message.focus()
    return false
  } else if (dom.option.value == '') {
    radioMsg.innerHTML = msgs[4]
    radioBtns.focus()
    return false
  } else if (dom.about.value == '') {
    aboutMsg.innerHTML = msgs[5]
    dom.about.focus()
    return false
  }
}
