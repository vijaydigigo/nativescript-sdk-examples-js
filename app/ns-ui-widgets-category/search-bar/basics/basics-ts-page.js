"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var dialogs = require("tns-core-modules/ui/dialogs");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("sbHint", "Search");
    vm.set("sbText", "");
    vm.on(observable_1.Observable.propertyChangeEvent, function (propertyChangeData) {
        if (propertyChangeData.propertyName === "sbText") {
            console.log("SearchBar text changed! New value: ", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onSubmit(args) {
    var searchbar = args.object;
    console.log("Search submit result: ", searchbar.text);
    dialogs.alert("You are searching for " + searchbar.text)
        .then(function () {
        console.log("Dialog closed!");
    });
}
exports.onSubmit = onSubmit;
function onClear() {
    console.log("clear search-bar text");
    dialogs.alert("clear search-bar text")
        .then(function () {
        console.log("Dialog closed!");
    });
}
exports.onClear = onClear;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUFnRjtBQUdoRixxREFBdUQ7QUFFdkQsd0JBQStCLElBQUk7SUFDL0IsSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFdEMsSUFBTSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFDNUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFckIsRUFBRSxDQUFDLEVBQUUsQ0FBQyx1QkFBVSxDQUFDLG1CQUFtQixFQUFFLFVBQUMsa0JBQXFDO1FBQ3hFLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLFlBQVksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakYsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQWJELHdDQWFDO0FBR0Qsa0JBQXlCLElBQUk7SUFDekIsSUFBTSxTQUFTLEdBQTBCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBeUIsU0FBUyxDQUFDLElBQU0sQ0FBQztTQUN2RCxJQUFJLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBUEQsNEJBT0M7QUFHRDtJQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNyQyxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLElBQUksQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCwwQkFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgUHJvcGVydHlDaGFuZ2VEYXRhfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7U2VhcmNoQmFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuLy8gPj4gc2VhcmNoLWJhci1iYXNpY3MtY29kZS10c1xuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+IGFyZ3Mub2JqZWN0O1xuICAgIC8vIGJpbmRpbmcgU2VnbWVudGVkQmFyIGB0ZXh0YCBhYmQgYGhpbnRgIHByb3BlcnRpZXNcbiAgICBjb25zdCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgdm0uc2V0KFwic2JIaW50XCIsIFwiU2VhcmNoXCIpO1xuICAgIHZtLnNldChcInNiVGV4dFwiLCBcIlwiKTtcbiAgICAvLyBoYW5kbGUgdGV4dCBjaGFuZ2UgZXZlbnRcbiAgICB2bS5vbihPYnNlcnZhYmxlLnByb3BlcnR5Q2hhbmdlRXZlbnQsIChwcm9wZXJ0eUNoYW5nZURhdGE6UHJvcGVydHlDaGFuZ2VEYXRhKSA9PiB7XG4gICAgICAgIGlmIChwcm9wZXJ0eUNoYW5nZURhdGEucHJvcGVydHlOYW1lID09PSBcInNiVGV4dFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaEJhciB0ZXh0IGNoYW5nZWQhIE5ldyB2YWx1ZTogXCIsIHByb3BlcnR5Q2hhbmdlRGF0YS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG59XG5cbi8vIEhhbmRsZSBTZWFyY2hCYXIgYHN1Ym1pdGAgZXZlbnQuXG5leHBvcnQgZnVuY3Rpb24gb25TdWJtaXQoYXJncykge1xuICAgIGNvbnN0IHNlYXJjaGJhcjogU2VhcmNoQmFyID0gPFNlYXJjaEJhcj4gYXJncy5vYmplY3Q7XG4gICAgY29uc29sZS5sb2coXCJTZWFyY2ggc3VibWl0IHJlc3VsdDogXCIsIHNlYXJjaGJhci50ZXh0KTtcbiAgICBkaWFsb2dzLmFsZXJ0KGBZb3UgYXJlIHNlYXJjaGluZyBmb3IgJHtzZWFyY2hiYXIudGV4dH1gKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgICB9KTtcbn1cblxuLy8gSGFuZGxlIFNlYXJjaEJhciBgY2xlYXJgIGV2ZW50LlxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xlYXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJjbGVhciBzZWFyY2gtYmFyIHRleHRcIik7XG4gICAgZGlhbG9ncy5hbGVydChcImNsZWFyIHNlYXJjaC1iYXIgdGV4dFwiKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgICB9KTtcbn1cbi8vIDw8IHNlYXJjaC1iYXItYmFzaWNzLWNvZGUtdHNcbiJdfQ==