
  const handleCloseButton = () => {
    const linkList = document.getElementById('link-list');
    linkList.innerHTML = '';
  }
  const handleRefreshButton = () => {
    handleCloseButton();
    const linkList = document.getElementById('link-list');
    const apiLinks = getLinksFromApi();
    apiLinks.forEach( link => {
      const newLi = document.createElement('li');
      const newA = document.createElement('a');
      const linkText = document.createTextNode(link.desc); 
      newA.appendChild(linkText);
      newA.href = link.url;
      newLi.appendChild(newA);
      linkList.appendChild(newLi);
      // linkList.innerHTML = `${linkList.innerHTML}<li><a href="${link.url}">${link.desc}</a></li>`;
    });
  }
  const getLinksFromApi = () => [{desc: "article 1", url: "www.test.com"},{desc: "article 2", url: "www.test.com"},{desc: "article 3", url: "www.test.com"},{desc: "article 4", url: "www.test.com"}];
