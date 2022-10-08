var dual =dualButton("center");
dual.first_button({name:"Bulb ON", action:"digitalWrite", 
                  pin:"1", value:"LOW", bgcolor:"blue",
                  shape:"rectangle", text_color:"white"})

dual.second_button({name:"Bulb OFF", action:"digitalWrite", 
                    pin:"1", value:"HIGH", bgcolor:"black",
                    shape:"rectangle", text_color:"white"})