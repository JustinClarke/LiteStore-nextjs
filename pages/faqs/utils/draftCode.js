const data = [
                    {
                    category: "General", info: [
                                                    {question:"1", answer: "yes"},
                                                    {question:"1", answer: "yes"},
                                                    {question:"1", answer: "yes"},
                                                    {question:"1", answer: "yes"},
                                                ]
                    },
                    {
                        category: "Landowners", info: [
                                                        {question:"1", answer: "yes"},
                                                        {question:"1", answer: "yes"},
                                                        {question:"1", answer: "yes"},
                                                        {question:"1", answer: "yes"},
                                                    ]
                    },
                    {
                        category: "Brands", info: [
                                                        {question:"1", answer: "yes"},
                                                        {question:"1", answer: "yes"},
                                                        {question:"1", answer: "yes"},
                                                        {question:"1", answer: "yes"},
                                                    ]
                    },
                    {
                        category: "Services", info: [
                                                        {question:"1", answer: "yes"},
                                                        {question:"1", answer: "yes"},
                                                        {question:"1", answer: "yes"},
                                                        {question:"1", answer: "yes"},
                                                    ]
                    }
                ];
// console.log(data[0].info[0].question);

let l= data[0].info.map((s)=> (s)).length

for (let i = 0; i < l; i++) { 
  console.log(data[0].info[i].question)
  console.log(data[0].info[i].answer)
}

// console.log(data[0].info.map((s)=> (s)));























