
class EAM {

    get ChangeTenantName_Field () {return $('input[name="name"]')};
    get Save_Button () {return $('button[type="submit"]')};
    get AddWorker_Button () {return $('a[href="/eam/create-worker"]')};
    get AddGroup_Button () {return $('a[href="/eam/configurate-group"]')};
//    get SLC () {return $('a[href="/slc"]')};
//     get Menu () {return $('img[src="/static/media/menu.e13479af39489dad55980a36b77b39e6.svg"]')};
//     get Logout () {return $('button[class="styles_dropdownBtn__TkE8S"]')}; 
    get Logo () {return $('img[alt="logo"]')};

}
module.exports = EAM;
