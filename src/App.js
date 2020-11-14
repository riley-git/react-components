

import TabList from "./components/TabList"; 
import CheckInProfileCard from "./components/CheckInProfileCard"
import ContactProfileCard from "./components/ContactProfileCard";
import InvoiceProfileCard from "./components/InvoiceProfile/InvoiceProfileCard";

function App() {
  return (
    <div className="max-w-4xl mx-auto">
         <h1 className="text-2xl px-3 py-3 text-indigo-800 font-bold font-display ">Tabs Component</h1>
         <TabList> 
       <div label="Check In"> 
         <CheckInProfileCard/>
       </div> 
       <div label="Contact"> 
         <ContactProfileCard/> 
       </div> 
       <div label="Invoices"> 
         <InvoiceProfileCard/>
       </div> 
       <div label="Files"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
       <div label="Check Out"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
     </TabList> 
    </div>
  );
}

export default App;
