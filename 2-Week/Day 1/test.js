let objs = { tags: ['div', 'label'], text: ['Welcome', 'Some Text'], color: ['blue', 'green'] }

            let valArr = getAttrVal(objs, "tags");
            console.log(valArr);

            function getAttrVal(obj, attr){
                let vals = "";
                for(let attrs in obj){
                    if(attrs == attr){
                        vals = obj[attrs];
                    }
                }
                return vals;
            }