const input = document.querySelector(".footer_input");
const plus = document.querySelector(".footer_button");
const remove = document.querySelector(".remove_button");
const ul = document.querySelector(".items");

function onAdd(event) {
  const text = input.value;
  const paint = createItem(text);
  ul.appendChild(paint);
  input.value = "";
  input.focus();
}

let id = 0; //UUID 쓰는게 좋긴 함. 지금은 간단하게.

function createItem(text) {
  const li = document.createElement("li");
  li.setAttribute("class", "item_row");
  li.setAttribute("data-id", id);
  li.innerHTML = ` 
            <div class="item">
              <span class="item_name">${text}</span>
              <button class="item_delete">
                <i class="fas fa-trash-alt" data-id=${id}></i>
              </button>
            </div>
            <div class="items_divider"></div>`;
  id++;
  return li;
  // const div = document.createElement("div");
  // div.setAttribute("class", "item");

  // const span = document.createElement("span");
  // span.setAttribute("class", "item_name");
  // span.innerText = text;

  // const button = document.createElement("button");
  // button.setAttribute("class", "remove_button");
  // button.innerHTML = '<i class="fas fa-trash-alt"></i>';
  // button.addEventListener("click", () => {
  //   ul.removeChild(li);
  //   input.focus();
  // });

  // const divider = document.createElement("div");
  // divider.setAttribute("class", "items_divider");

  // div.appendChild(span);
  // div.appendChild(button);

  // li.appendChild(div);
  // li.appendChild(divider);
}

plus.addEventListener("click", onAdd);

input.addEventListener("keydown", (event) => {
  //keypress는 지원이 중단된 함수라서 keydown으로 변경
  if (event.isComposing) {
    //한글의 경우 오류가 발생해서 글자가 만들어지는 중인지 확인하는 코드 넣음, 그냥 keyup 사용해도 됨
    return;
  }

  if (event.key === "Enter") {
    onAdd();
  }
});

ul.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
