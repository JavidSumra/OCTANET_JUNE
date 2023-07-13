let i = localStorage.length ?? 0;

const getListofTodos = () => {
  let overdueItem = document.querySelector(".OverDue");
  let overdueCount = document.querySelector(".count-OD");
  let dueTodayItem = document.querySelector(".DueToday");
  let duetodayCount = document.querySelector(".count-DT");
  let dueLaterItem = document.querySelector(".DueLater");
  let duelaterCount = document.querySelector(".count-DL");
  let TODOList;
  // console.log(localStorage);
  // console.log(localStorage.length);
  if (localStorage.length != undefined) {
    for (let item in localStorage) {
      if (localStorage.getItem(item)) {
        let date = new Date(
          localStorage.getItem(item).split(" ")[
            localStorage.getItem(item).split(" ").length - 1
          ]
        ).getTime();
        let today = new Date(new Date().toISOString().split("T")[0]).getTime();
        let li = document.createElement("li");
        //   console.log(date + " | " + today);
        if (date < today) {
          li.setAttribute("class", "OVERDUE");
          // console.log(j);
          li.innerHTML =
            localStorage.getItem(item) +
            `<button class="del" style='margin-left:10px;' onclick='deleteTodo(${
              item.split("-")[1]
            })'>Delete</button>`;
          overdueItem.appendChild(li);
          overdueCount.innerHTML = document.querySelectorAll(".OVERDUE").length;
        } else if (date > today) {
          li.setAttribute("class", "DUELATER");
          // console.log(j);
          li.innerHTML =
            localStorage.getItem(item) +
            `<button class="del" style='margin-left:10px;' onclick='deleteTodo(${
              item.split("-")[1]
            })'>Delete</button>`;
          dueLaterItem.appendChild(li);
          duelaterCount.innerHTML =
            document.querySelectorAll(".DUELATER").length;
        } else {
          li.setAttribute("class", "DUETODAY");
          // console.log(j);
          li.innerHTML =
            localStorage.getItem(item) +
            `<button class="del" style='margin-left:10px;' onclick='deleteTodo(${
              item.split("-")[1]
            })'>Delete</button>`;
          dueTodayItem.appendChild(li);
          duetodayCount.innerHTML =
            document.querySelectorAll(".DUETODAY").length;
        }
      }
    }
  }
};

const submit = () => {
  let todoTitle = document.getElementById("todo");
  let dueDate = document.getElementById("dueDate");
  if (todoTitle.value.length != 0 && dueDate.value.length != 0) {
    localStorage.setItem(`detail-${i}`, todoTitle.value + " " + dueDate.value);
  }
  i += 1;
  // getListofTodos()
  window.location.reload();
};
onload = () => {
  getListofTodos();
};

function deleteTodo(item) {
  localStorage.removeItem(`detail-${item}`);
  // getListofTodos();
  window.location.reload();
}
