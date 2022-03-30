const myAPi = "https://api.github.com/users/dag-bag/repos";
async function getProjects(params) {
  const res = await fetch(myAPi);
  const resData = await res.json();
  console.log(resData);
}

getProjects();
