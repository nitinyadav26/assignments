/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


function alreadypresent(catagories, item){

  for(let i =0;i<catagories.length;i++){
    if(catagories[i]==item){
      return true 
    }
    
  }
  return false



}

function calculateTotalSpentByCategory(transactions) {
  let ans = []


for(let i =0;i<transactions.length;i++){
  let obj = {
    category:undefined,
    totalSpent:undefined
  }
  obj.category= transactions[i].category
  obj.totalSpent= transactions[i].price
  ans.push(obj);
  
}

let catagories = []

for(let i =0;i<ans.length;i++){
  if(alreadypresent(catagories,ans[i].category)){

  }
  else{
    catagories.push(ans[i].category)
  }
  

}


let newans= []
for(let i=0;i<catagories.length;i++){
  let cat= catagories[i]
  let price = 0;
  let obj = {
    category:catagories[i],
    totalSpent:undefined
  }
  
  for(let j =0;j<ans.length;j++){
    if(ans[j].category==cat){
      price+=ans[j].totalSpent
    }

  }
  obj.totalSpent=price
  newans.push(obj)

}

return newans







  



  




}

module.exports = calculateTotalSpentByCategory;
