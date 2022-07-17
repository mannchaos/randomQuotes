
const getQuote = async (url) => {
  const resp = await fetch("https://type.fit/api/quotes");
  const data = await resp.json();
  console.log(data);

  var items = data[Math.floor(Math.random() * data.length)];
    console.log(items.text)
  return (document.getElementById("para").innerHTML = `
<blockquote>
  ${items.text}
  <span>${items.author}</span>
</blockquote>`);
};
