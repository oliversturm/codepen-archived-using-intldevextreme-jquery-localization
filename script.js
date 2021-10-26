DevExpress.viz.currentTheme("generic.light");
$(function() {
    var locale = getLocale();
    var locales = [
        { name: "English", value: "en" },
        { name: "Deutsch", value: "de" },
        { name: "Русский", value: "ru" }
    ];

    var dataGridOptions = {
        dataSource: payments,
        columns: [{
            dataField: "PaymentId",
            allowEditing: false,
            width: "100px"
        }, {
            dataField: "ContactName"
        }, {
            dataField: "CompanyName"
        }, {
            dataField: "Amount",
            dataType: "number",
            format: {type: "currency" }
        }, {
            dataField: "PaymentDate",
            dataType: "date"
        }],
        filterRow: {
            visible: true,
            applyFilter: "auto"
        },
        editing: {
            mode: "popup",
            allowUpdating: true,
            popup: {
                width: 700,
                height: 345
            }
        }
    };

    var selectBoxOptions = {
        inputAttr: { id: "selectInput" },
        dataSource: locales,
        displayExpr: "name",
        valueExpr: "value",
        value: locale,
        onValueChanged: changeLocale
    };

    function changeLocale(data) {
        setLocale(data.value);
        window.location.href = window.location.href;
    }

    function getLocale() {
        var locale = sessionStorage.getItem("locale");
        return locale != null ? locale : "en";
    }

    function setLocale(locale) {
        sessionStorage.setItem("locale", locale);
    }

    DevExpress.localization.locale(locale);
    $("#gridContainer").dxDataGrid(dataGridOptions);
    $("#selectBox").dxSelectBox(selectBoxOptions);
});

var payments = [{
    "PaymentId": 1,
    "ContactName": "Nancy Davolio",
    "CompanyName": "Premier Buy",
    "Amount": 1740,
    "PaymentDate": "2013/01/06"
},
{
    "PaymentId": 2,
    "ContactName": "Andrew Fuller",
    "CompanyName": "ElectrixMax",
    "Amount": 850.43,
    "PaymentDate": "2013/01/13"
},
{
    "PaymentId": 3,
    "ContactName": "Janet Leverling",
    "CompanyName": "Video Emporium",
    "Amount": 2235,
    "PaymentDate": "2013/01/07"
},
{
    "PaymentId": 4,
    "ContactName": "Margaret Peacock",
    "CompanyName": "Screen Shop",
    "Amount": 1965,
    "PaymentDate": "2013/01/03"
},
{
    "PaymentId": 5,
    "ContactName": "Steven Buchanan",
    "CompanyName": "Braeburn",
    "Amount": 880,
    "PaymentDate": "2013/01/10"
},
{
    "PaymentId": 6,
    "ContactName": "Michael Suyama",
    "CompanyName": "PriceCo",
    "Amount": 5260,
    "PaymentDate": "2013/01/17"
},
{
    "PaymentId": 7,
    "ContactName": "Robert King",
    "CompanyName": "Ultimate Gadget",
    "Amount": 2790,
    "PaymentDate": "2013/01/21"
},
{
    "PaymentId": 8,
    "ContactName": "Laura Callahan",
    "CompanyName": "EZ Stop",
    "Amount": 3140,
    "PaymentDate": "2013/01/01"
},
{
    "PaymentId": 9,
    "ContactName": "Anne Dodsworth",
    "CompanyName": "Clicker",
    "Amount": 6175,
    "PaymentDate": "2013/01/24"
},
{
    "PaymentId": 10,
    "ContactName": "Clark Morgan",
    "CompanyName": "Store of America",
    "Amount": 4575,
    "PaymentDate": "2013/01/11"
}];