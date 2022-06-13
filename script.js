// write your JavaScript here

const form = document.forms.Form1

form.Name.addEventListener('input', (e) =>
{
    nameSpan = document.querySelector('#name-status')
    val = e.target.value.trim()
    if (val === '' || val == null)
        nameSpan.textContent = "🔴"
    else
        nameSpan.textContent = "🟢"
})

form.Email.addEventListener('input', (e) =>
{
    emailSpan = document.querySelector('#email-status')
    val = e.target.value.trim()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val))
        emailSpan.textContent = "🟢"
    else
        emailSpan.textContent = "🔴"
})
