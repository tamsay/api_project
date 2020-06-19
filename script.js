let displayResult = document.querySelector('#display')
// let div = document.createElement('div');
// let bankName = document.createElement('h2')
// let bankCode = document.createElement('p')
// let sortCode = document.createElement('p')


let createTable=(result)=>{
    // displayResult.innerText = result
    result.forEach(element => {
        // console.log(element)
        let div = document.createElement('div');
        div.className = 'bankCard flex-fill';

        let bankName = document.createElement('h2')
        bankName.innerText = element.BankName;

        let bankCode = document.createElement('p')
        let span1 = document.createElement('span')
        bankCode.innerText = `Bank Code:`;
        span1.innerText = element.BankCode;

        let sortCode = document.createElement('p')
        let span2 = document.createElement('span')
        sortCode.innerText = `Sort Code: `;
        span2.innerText = element.BankSortCode;

        div.appendChild(bankName)
        div.appendChild(bankCode)
        div.appendChild(span1);
        div.appendChild(sortCode)
        div.appendChild(span2)
        displayResult.appendChild(div)
    });

}


var requestOptions = {
  method: 'POST',
  headers: {
      Authorization : "Bearer j633vjoule1j"
  },
  redirect: 'follow'
};

fetch("https://cors-anywhere.herokuapp.com/https://api.wallets.africa/transfer/banks/all", requestOptions)
.then(response => response.json())
.then(result => createTable(result))
.catch(error => console.log('error', error));

