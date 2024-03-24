        let data = [
            { id: 1, name: "Alice", scores: [85, 90, 88] },
            { id: 2, name: "Bob", scores: [72, 78, 65] },
            { id: 3, name: "Charlie", scores: [90, 95, 92] },
            { id: 4, name: "David", scores: [68, 72, 75] },
            { id: 5, name: "Eve", scores: [95, 98, 100] }
        ];
        // Question: Find the average score for each student.
        let stuAvgScore = function avgScore(){
            let studs = data.map(stu => {
                let sum = 0;
                for(let i = 0; i < stu.scores.length; i++){
                    sum += stu.scores[i];
                }
                return stu.name + " " + (sum/stu.scores.length).toFixed(2);
            })

            return studs;
        }
        console.log(stuAvgScore());    

    function stuPass(passingMark){
        return data.map((stu) => {
        let sum = 0; let avgObj = {}
                for(let i = 0; i < stu.scores.length; i++){
                    sum += stu.scores[i];
                }
                avgObj["name"] = stu.name; avgObj["score"] = (sum/stu.scores.length).toFixed(2);
                return avgObj;
        }).filter(stu => stu.score > passingMark);
    }

    console.log(stuPass(80));