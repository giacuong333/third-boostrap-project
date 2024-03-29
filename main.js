$(document).ready(function () {
  const tableData = [
    {
      id: "1,001",
      header1: "random",
      header2: "data",
      header3: "placeholder",
      header4: "text",
    },

    {
      id: "1,002",
      header1: "placeholder",
      header2: "irrelevant",
      header3: "visual",
      header4: "layout",
    },

    {
      id: "1,003",
      header1: "data",
      header2: "rich",
      header3: "dashboard",
      header4: "tabular",
    },

    {
      id: "1,004",
      header1: "text",
      header2: "information",
      header3: "placeholder",
      header4: "data",
    },

    {
      id: "1,005",
      header1: "dashboard",
      header2: "data",
      header3: "placeholder",
      header4: "text",
    },

    {
      id: "1,006",
      header1: "text",
      header2: "data",
      header3: "irrelevant",
      header4: "dashboard",
    },

    {
      id: "1,007",
      header1: "rantabulardom",
      header2: "illustrative",
      header3: "placeholder",
      header4: "random",
    },

    {
      id: "1,008",
      header1: "random",
      header2: "data",
      header3: "placeholder",
      header4: "text",
    },

    {
      id: "1,009",
      header1: "random",
      header2: "data",
      header3: "placeholder",
      header4: "irrelevant",
    },

    {
      id: "1,010",
      header1: "random",
      header2: "data",
      header3: "placeholder",
      header4: "irrelevant",
    },

    {
      id: "1,011",
      header1: "random",
      header2: "visual",
      header3: "placeholder",
      header4: "irrelevant",
    },

    {
      id: "1,012",
      header1: "random",
      header2: "data",
      header3: "placeholder",
      header4: "data",
    },

    {
      id: "1,013",
      header1: "data",
      header2: "placeholder",
      header3: "random",
      header4: "text",
    },

    {
      id: "1,014",
      header1: "data",
      header2: "layout",
      header3: "information",
      header4: "teplaceholderxt",
    },

    {
      id: "1,015",
      header1: "random",
      header2: "tabular",
      header3: "placeholder",
      header4: "random",
    },
  ];

  (() => {
    const sectionTableBodyObj = $(".section-table > table > tbody");

    const html = tableData
      .map((data) => {
        return `
            <tr>
                  <td>${data.id}</td>
                  <td>${data.header1}</td>
                  <td>${data.header2}</td>
                  <td>${data.header3}</td>
                  <td>${data.header4}</td>
            </tr>
      `;
      })
      .join(" ");

    sectionTableBodyObj.append(html);
  })();
});
