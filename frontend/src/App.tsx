import { Route, Switch, Redirect } from "wouter";
import HomePage from "./pages/public/HomePage";
import AuthorityEconomics from "./pages/public/AuthorityEconomics";
import AuthorityPartner from "./pages/public/AuthorityPartner";
import CertifiedOperator from "./pages/public/CertifiedOperator";
import Partners from "./pages/public/Partners";
import SmbSales from "./pages/public/SmbSales";
import Product from "./pages/public/Product";
import WhyStrategicAI from "./pages/public/WhyStrategicAI";
import Pricing from "./pages/public/Pricing";
import Intake from "./pages/public/Intake";
import IntakeThanks from "./pages/public/IntakeThanks";
import PartnerRevenueSimulator from "./pages/public/PartnerRevenueSimulator";
import Placeholder from "./pages/public/Placeholder";

function App() {
    return (
        <Switch>
            <Route path="/" component={HomePage} />
            
            {/* Main Links */}
            <Route path="/product" component={Product} />
            <Route path="/features" component={Product} /> {/* Alias for navigation */}
            <Route path="/why" component={WhyStrategicAI} />
            <Route path="/pricing" component={Pricing} />
            
            {/* Partner & Certification */}
            <Route path="/partners" component={Partners} />
            <Route path="/partner" component={AuthorityPartner} />
            <Route path="/authority-partner" component={AuthorityPartner} />
            <Route path="/operator" component={CertifiedOperator} />
            <Route path="/certified-operator" component={CertifiedOperator} />
            
            {/* Strategic/Economics */}
            <Route path="/economics" component={AuthorityEconomics} />
            <Route path="/authority-economics" component={AuthorityEconomics} />
            <Route path="/partner-revenue-simulator" component={PartnerRevenueSimulator} />
            
            {/* Solutions */}
            <Route path="/smb" component={SmbSales} />
            
            {/* Intake Flow */}
            <Route path="/intake" component={Intake} />
            <Route path="/intake/thanks" component={IntakeThanks} />
            
            {/* Placeholder/Misc */}
            <Route path="/login" component={Placeholder} />
            <Route path="/roadmap" component={Placeholder} />

            <Route>404: Page Not Found</Route>
        </Switch>
    );
}

export default App;
