import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceCategories } from './components/ServiceCategories';
import { LawyerCard } from './components/LawyerCard';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { LawyerProfile } from './components/LawyerProfile';
import { ActiveCases } from './components/ActiveCases';
import { Notifications } from './components/Notifications';
import { PeopleHelped } from './components/PeopleHelped';
import { ChatBot } from './components/ChatBot';
import { BookingModal } from './components/BookingModal';
import { ConfirmBooking } from './components/ConfirmBooking';
import { PaymentModal } from './components/PaymentModal';
import { WaitingRoom } from './components/WaitingRoom';
import { VideoConsultation } from './components/VideoConsultation';
import { ReviewModal } from './components/ReviewModal';
import { TemplateCategories } from './components/TemplateCategories';
import { TemplateDetail } from './components/TemplateDetail';
import { UserProfile } from './components/UserProfile';
import { CorporateProfile } from './components/CorporateProfile';
import { MapPin, Search, Filter } from 'lucide-react';

// Mock Data
const MOCK_LAWYERS = [
  {
    id: '1',
    name: 'Adv. Sarah Ahmed',
    specialty: 'Family & Divorce Law',
    location: 'Dhaka, Gulshan',
    rating: 4.9,
    reviewCount: 124,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    experience: '12 Years',
    fee: '৳2000 / Consultation'
  },
  {
    id: '2',
    name: 'Adv. Rahman Khan',
    specialty: 'Criminal Law',
    location: 'Dhaka, Dhanmondi',
    rating: 4.8,
    reviewCount: 98,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    experience: '15 Years',
    fee: '৳3000 / Consultation'
  },
  {
    id: '3',
    name: 'Adv. Fatima Begum',
    specialty: 'Labor & Employment',
    location: 'Dhaka, Mirpur',
    rating: 4.7,
    reviewCount: 76,
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    experience: '8 Years',
    fee: '৳1500 / Consultation'
  },
  {
    id: '4',
    name: 'Adv. Kamal Hossain',
    specialty: 'Corporate Law',
    location: 'Dhaka, Motijheel',
    rating: 5.0,
    reviewCount: 42,
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    experience: '20 Years',
    fee: '৳5000 / Consultation'
  },
  {
    id: '5',
    name: 'Adv. Nasrin Ahmed',
    specialty: 'Constitutional Law',
    location: 'Dhaka, Banani',
    rating: 4.9,
    reviewCount: 55,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    experience: '10 Years',
    fee: '৳1800 / Consultation'
  },
  {
    id: '6',
    name: 'Adv. Hasan Ali',
    specialty: 'Real Estate Law',
    location: 'Dhaka, Uttara',
    rating: 4.6,
    reviewCount: 63,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    experience: '18 Years',
    fee: '৳2500 / Consultation'
  }
];

// Template Mock Data
const TEMPLATE_CATEGORIES = [
  {
    id: '1',
    name: 'Family Law Documents',
    description: 'Marriage agreements, divorce petitions, and custody documents',
    icon: '👨‍👩‍👧‍👦',
    count: 8,
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: '2',
    name: 'Business & Corporate',
    description: 'Contracts, agreements, and business formation documents',
    icon: '💼',
    count: 12,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: '3',
    name: 'Property & Real Estate',
    description: 'Sale deeds, rent agreements, and property documents',
    icon: '🏠',
    count: 7,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: '4',
    name: 'Employment Law',
    description: 'Employment contracts, termination letters, and NDA forms',
    icon: '📋',
    count: 9,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: '5',
    name: 'Wills & Estate',
    description: 'Will templates, power of attorney, and guardianship docs',
    icon: '📜',
    count: 6,
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: '6',
    name: 'Criminal Law',
    description: 'Complaint forms, bail applications, and legal notices',
    icon: '⚖️',
    count: 5,
    color: 'from-red-500 to-pink-500'
  }
];

const TEMPLATE_LIBRARY: Record<string, any[]> = {
  '1': [ // Family Law
    {
      id: '1-1',
      name: 'Marriage Agreement',
      description: 'Pre-marriage or post-marriage agreement template',
      content: 'MARRIAGE AGREEMENT\n\nThis Marriage Agreement is made on [Date] between [Spouse 1 Name] and [Spouse 2 Name].\n\nWhereas, the parties wish to define their rights and obligations during and after marriage.\n\nNow it is agreed as follows:\n\n1. PROPERTY RIGHTS\n[Property Details]\n\n2. FINANCIAL OBLIGATIONS\n[Financial Terms]\n\n3. DISPUTE RESOLUTION\n[Dispute Resolution Clause]\n\nSigned and sealed on this [Date].\n\n[Spouse 1 Signature]  [Spouse 2 Signature]',
      fields: [
        { name: 'date1', label: 'Date', type: 'text', placeholder: 'DD/MM/YYYY' },
        { name: 'spouse1', label: 'First Spouse Name', type: 'text', placeholder: 'Full Name' },
        { name: 'spouse2', label: 'Second Spouse Name', type: 'text', placeholder: 'Full Name' },
        { name: 'date2', label: 'Agreement Date', type: 'text', placeholder: 'DD/MM/YYYY' },
        { name: 'property', label: 'Property Details', type: 'textarea', placeholder: 'Describe property and ownership' },
        { name: 'financial', label: 'Financial Terms', type: 'textarea', placeholder: 'Specify financial obligations' },
        { name: 'dispute', label: 'Dispute Resolution', type: 'textarea', placeholder: 'How disputes will be resolved' },
        { name: 'date3', label: 'Signing Date', type: 'text', placeholder: 'DD/MM/YYYY' }
      ]
    },
    {
      id: '1-2',
      name: 'Divorce Petition',
      description: 'Template for filing divorce petition',
      content: 'DIVORCE PETITION\n\nTo the Honorable Court,\n\nPetitioner: [Petitioner Name]\nRespondent: [Respondent Name]\n\nGrounds for Divorce:\n[Grounds]\n\nReliefs Sought:\n1. Dissolution of marriage\n2. Custody of children: [Children Names]\n3. Maintenance: [Amount]\n4. Property Division: [Details]\n\nThis petition is filed under [Relevant Act].\n\n[Petitioner Signature]\n[Date]',
      fields: [
        { name: 'petitioner', label: 'Petitioner Name', type: 'text', placeholder: 'Full Name' },
        { name: 'respondent', label: 'Respondent Name', type: 'text', placeholder: 'Full Name' },
        { name: 'grounds', label: 'Grounds for Divorce', type: 'textarea', placeholder: 'Specify legal grounds' },
        { name: 'children', label: 'Children Names', type: 'text', placeholder: 'List all children' },
        { name: 'maintenance', label: 'Maintenance Amount', type: 'text', placeholder: '৳ Amount' },
        { name: 'property', label: 'Property Division Details', type: 'textarea', placeholder: 'Property to be divided' }
      ]
    }
  ],
  '2': [ // Business & Corporate
    {
      id: '2-1',
      name: 'Service Agreement',
      description: 'Template for service agreement between parties',
      content: 'SERVICE AGREEMENT\n\nThis Agreement is entered into on [Date] between:\n\nService Provider: [Provider Name]\nClient: [Client Name]\n\n1. SCOPE OF SERVICES\n[Services Description]\n\n2. FEES AND PAYMENT\nTotal Fee: [Amount]\nPayment Terms: [Terms]\n\n3. TERM AND TERMINATION\nDuration: [Duration]\nTermination: [Termination Clause]\n\n4. CONFIDENTIALITY\n[Confidentiality Terms]\n\n5. LIABILITY\n[Liability Clause]\n\nSigned on [Date].\n\n[Provider Signature]  [Client Signature]',
      fields: [
        { name: 'date1', label: 'Agreement Date', type: 'text', placeholder: 'DD/MM/YYYY' },
        { name: 'provider', label: 'Service Provider Name', type: 'text', placeholder: 'Full Name/Company' },
        { name: 'client', label: 'Client Name', type: 'text', placeholder: 'Full Name/Company' },
        { name: 'services', label: 'Services Description', type: 'textarea', placeholder: 'Describe services in detail' },
        { name: 'fee', label: 'Total Fee', type: 'text', placeholder: '৳ Amount' },
        { name: 'payment', label: 'Payment Terms', type: 'text', placeholder: 'e.g., 50% upfront, 50% on completion' },
        { name: 'duration', label: 'Contract Duration', type: 'text', placeholder: 'e.g., 6 months, 1 year' }
      ]
    },
    {
      id: '2-2',
      name: 'Non-Disclosure Agreement',
      description: 'NDA template for protecting confidential information',
      content: 'NON-DISCLOSURE AGREEMENT (NDA)\n\nThis NDA is entered into on [Date] between:\n\nDisclosing Party: [Discloser Name]\nReceiving Party: [Receiver Name]\n\n1. CONFIDENTIAL INFORMATION\n[Define Confidential Information]\n\n2. OBLIGATIONS\nThe Receiving Party agrees to:\n- Keep information confidential\n- Use only for authorized purposes\n- Implement security measures\n\n3. EXCLUSIONS\n[List Exclusions]\n\n4. TERM\nDuration: [Duration]\n\n5. REMEDIES\n[Remedies for Breach]\n\nSigned on [Date].\n\n[Discloser Signature]  [Receiver Signature]',
      fields: [
        { name: 'date', label: 'NDA Date', type: 'text', placeholder: 'DD/MM/YYYY' },
        { name: 'discloser', label: 'Disclosing Party Name', type: 'text', placeholder: 'Full Name/Company' },
        { name: 'receiver', label: 'Receiving Party Name', type: 'text', placeholder: 'Full Name/Company' },
        { name: 'info', label: 'Define Confidential Information', type: 'textarea', placeholder: 'What information is confidential' },
        { name: 'duration', label: 'NDA Duration', type: 'text', placeholder: 'e.g., 2 years from disclosure' },
        { name: 'remedies', label: 'Remedies for Breach', type: 'textarea', placeholder: 'What happens if breached' }
      ]
    }
  ],
  '3': [ // Property & Real Estate
    {
      id: '3-1',
      name: 'Sale Deed',
      description: 'Template for property sale deed',
      content: 'SALE DEED\n\nThis Sale Deed is executed on [Date] between:\n\nSeller: [Seller Name]\nBuyer: [Buyer Name]\n\n1. PROPERTY DESCRIPTION\n[Property Details]\n\n2. CONSIDERATION\nPurchase Price: [Price]\n\n3. TERMS AND CONDITIONS\n[Terms]\n\n4. WARRANTY\nThe Seller warrants that the property is free from encumbrances.\n\n5. POSSESSION\nPossession shall be given on [Date].\n\nSigned on [Date].\n\n[Seller Signature]  [Buyer Signature]\n\nWitness: [Witness Names and Signatures]',
      fields: [
        { name: 'date1', label: 'Deed Date', type: 'text', placeholder: 'DD/MM/YYYY' },
        { name: 'seller', label: 'Seller Name', type: 'text', placeholder: 'Full Name' },
        { name: 'buyer', label: 'Buyer Name', type: 'text', placeholder: 'Full Name' },
        { name: 'property', label: 'Property Details', type: 'textarea', placeholder: 'Full property description with address' },
        { name: 'price', label: 'Purchase Price', type: 'text', placeholder: '৳ Amount' },
        { name: 'terms', label: 'Terms and Conditions', type: 'textarea', placeholder: 'Any special conditions' },
        { name: 'possession', label: 'Possession Date', type: 'text', placeholder: 'DD/MM/YYYY' }
      ]
    }
  ],
  '4': [ // Employment Law
    {
      id: '4-1',
      name: 'Employment Contract',
      description: 'Template for employment agreement',
      content: 'EMPLOYMENT CONTRACT\n\nThis Contract is entered into on [Date] between:\n\nEmployer: [Employer Name]\nEmployee: [Employee Name]\nPosition: [Position Title]\n\n1. TERM OF EMPLOYMENT\nStart Date: [Date]\nType: [Permanent/Temporary]\n\n2. SALARY AND BENEFITS\nSalary: [Amount] per [Month/Year]\nBenefits: [List Benefits]\n\n3. DUTIES AND RESPONSIBILITIES\n[Job Description]\n\n4. WORKING HOURS\n[Hours]\n\n5. TERMINATION\nNotice Period: [Days/Months]\nTermination Clause: [Clause]\n\n6. CONFIDENTIALITY\n[Confidentiality Terms]\n\nSigned on [Date].\n\n[Employer Signature]  [Employee Signature]',
      fields: [
        { name: 'date1', label: 'Contract Date', type: 'text', placeholder: 'DD/MM/YYYY' },
        { name: 'employer', label: 'Employer Name', type: 'text', placeholder: 'Company Name' },
        { name: 'employee', label: 'Employee Name', type: 'text', placeholder: 'Full Name' },
        { name: 'position', label: 'Position Title', type: 'text', placeholder: 'Job Title' },
        { name: 'startdate', label: 'Start Date', type: 'text', placeholder: 'DD/MM/YYYY' },
        { name: 'salary', label: 'Salary Amount', type: 'text', placeholder: '৳ Amount' },
        { name: 'benefits', label: 'Benefits', type: 'textarea', placeholder: 'Health insurance, bonuses, etc.' },
        { name: 'duties', label: 'Duties and Responsibilities', type: 'textarea', placeholder: 'Job description' },
        { name: 'hours', label: 'Working Hours', type: 'text', placeholder: 'e.g., 9 AM to 5 PM, 5 days a week' },
        { name: 'notice', label: 'Notice Period', type: 'text', placeholder: 'e.g., 30 days' }
      ]
    }
  ],
  '5': [ // Wills & Estate
    {
      id: '5-1',
      name: 'Will Template',
      description: 'Template for creating a will',
      content: 'WILL\n\nI, [Testator Name], being of sound mind and memory, hereby make, publish and declare this to be my Last Will and Testament:\n\n1. I declare that I am a resident of [Place]\n\n2. I nominate and appoint [Executor Name] as the Executor of this Will.\n\n3. DISTRIBUTION OF ESTATE\n\nI direct my Executor to distribute my estate as follows:\n\n[Estate Distribution]\n\n4. GUARDIANSHIP\nIf applicable, I appoint [Guardian Name] as Guardian of [Children Names].\n\n5. TAXES AND DEBTS\nI direct that all my debts and taxes be paid from my estate.\n\nIn Witness whereof, I have hereunto set my hand to this my Will on [Date].\n\n[Testator Signature]\n\nWitness 1: [Signature and Name]\nWitness 2: [Signature and Name]',
      fields: [
        { name: 'testator', label: 'Your Name (Testator)', type: 'text', placeholder: 'Full Name' },
        { name: 'place', label: 'Place of Residence', type: 'text', placeholder: 'City/District' },
        { name: 'executor', label: 'Executor Name', type: 'text', placeholder: 'Who will manage your estate' },
        { name: 'distribution', label: 'Estate Distribution', type: 'textarea', placeholder: 'Who gets what (e.g., 50% to spouse, 25% to each child)' },
        { name: 'guardian', label: 'Guardian Name (if children)', type: 'text', placeholder: 'Name of guardian' },
        { name: 'children', label: 'Children Names', type: 'text', placeholder: 'List of children' },
        { name: 'date', label: 'Date', type: 'text', placeholder: 'DD/MM/YYYY' }
      ]
    }
  ],
  '6': [ // Criminal Law
    {
      id: '6-1',
      name: 'FIR (First Information Report)',
      description: 'Template for filing FIR with police',
      content: 'FIRST INFORMATION REPORT (FIR)\n\nPolice Station: [Station Name]\nDate: [Date]  Time: [Time]\n\n1. COMPLAINANT DETAILS\nName: [Name]\nAddress: [Address]\nContact: [Phone]\n\n2. ACCUSED DETAILS\nName: [Accused Name]\nAddress: [Address]\nDescription: [Physical Description]\n\n3. OFFENCE DETAILS\nOffences under Sections: [Section Numbers]\nDate of Incident: [Date]\nPlace of Incident: [Location]\n\n4. FACTS AND CIRCUMSTANCES\n[Detailed description of the incident]\n\n5. PROPERTY DETAILS (if applicable)\n[Description of stolen/damaged property]\n\n6. WITNESSES\n[List of witnesses with contact details]\n\nComplainant Signature: [Signature]',
      fields: [
        { name: 'station', label: 'Police Station', type: 'text', placeholder: 'Station Name' },
        { name: 'date', label: 'Date of FIR', type: 'text', placeholder: 'DD/MM/YYYY' },
        { name: 'complainant', label: 'Complainant Name', type: 'text', placeholder: 'Full Name' },
        { name: 'address', label: 'Complainant Address', type: 'textarea', placeholder: 'Full Address' },
        { name: 'accused', label: 'Accused Name', type: 'text', placeholder: 'Full Name' },
        { name: 'sections', label: 'Sections of Law', type: 'text', placeholder: 'e.g., IPC 379, 380' },
        { name: 'incident_date', label: 'Date of Incident', type: 'text', placeholder: 'DD/MM/YYYY' },
        { name: 'facts', label: 'Facts and Circumstances', type: 'textarea', placeholder: 'Detailed description of what happened' },
        { name: 'witnesses', label: 'Witnesses', type: 'textarea', placeholder: 'Names and contact of witnesses' }
      ]
    }
  ]
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedLawyer, setSelectedLawyer] = useState<any>(null);
  
  // Consultation flow states
  const [consultationStep, setConsultationStep] = useState<'idle' | 'booking' | 'confirm' | 'payment' | 'waiting' | 'call' | 'review'>('idle');
  const [currentBooking, setCurrentBooking] = useState<any>(null);
  const [selectedLawyerForBooking, setSelectedLawyerForBooking] = useState<any>(null);
  
  // Templates state
  const [selectedTemplateCategory, setSelectedTemplateCategory] = useState<any>(null);

  // Profile states (removed - using currentPage instead)

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedLawyer(null);
    window.scrollTo(0, 0);
  };

  const handleOpenProfile = () => {
    handleNavigate('profile');
  };

  const handleSwitchToCorporate = () => {
    handleNavigate('corporate-profile');
  };

  const handleSwitchToConsumer = () => {
    handleNavigate('profile');
  };

  const handleLawyerClick = (lawyer: any) => {
    setSelectedLawyer(lawyer);
    window.scrollTo(0, 0);
  };

  // Consultation flow handlers
  const handleBookAppointment = (lawyer: any) => {
    setSelectedLawyerForBooking(lawyer);
    setConsultationStep('booking');
  };

  const handleBookingConfirm = (bookingDetails: any) => {
    setCurrentBooking(bookingDetails);
    setConsultationStep('confirm');
  };

  const handleConfirmBooking = () => {
    setConsultationStep('payment');
  };

  const handlePaymentComplete = () => {
    setConsultationStep('waiting');
  };

  const handleStartConsultation = () => {
    setConsultationStep('call');
  };

  const handleEndCall = () => {
    setConsultationStep('review');
  };

  const handleReviewSubmit = (review: any) => {
    // Save review (in real app, would save to backend)
    console.log('Review submitted:', review);
    setConsultationStep('idle');
    setCurrentBooking(null);
    setSelectedLawyerForBooking(null);
  };

  const handleCloseConsultation = () => {
    setConsultationStep('idle');
    setCurrentBooking(null);
    setSelectedLawyerForBooking(null);
  };

  const handleSelectTemplateCategory = (category: any) => {
    setSelectedTemplateCategory(category);
  };

  const handleBackToTemplates = () => {
    setSelectedTemplateCategory(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Navbar 
        onNavigate={handleNavigate} 
        onProfileClick={handleOpenProfile}
      />
      
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />

      {/* Consultation Flow Modals */}
      <BookingModal 
        lawyer={selectedLawyerForBooking}
        isOpen={consultationStep === 'booking'}
        onClose={handleCloseConsultation}
        onConfirm={handleBookingConfirm}
      />

      <ConfirmBooking 
        booking={currentBooking}
        isOpen={consultationStep === 'confirm'}
        onClose={handleCloseConsultation}
        onConfirm={handleConfirmBooking}
      />

      <PaymentModal 
        booking={currentBooking}
        isOpen={consultationStep === 'payment'}
        onClose={handleCloseConsultation}
        onPaymentComplete={handlePaymentComplete}
      />

      <WaitingRoom 
        booking={currentBooking}
        isOpen={consultationStep === 'waiting'}
        onStartConsultation={handleStartConsultation}
      />

      <VideoConsultation 
        booking={currentBooking}
        isOpen={consultationStep === 'call'}
        onEndCall={handleEndCall}
      />

      <ReviewModal 
        booking={currentBooking}
        isOpen={consultationStep === 'review'}
        onClose={handleCloseConsultation}
        onSubmit={handleReviewSubmit}
      />
      
      <main className="flex-1">
        {selectedLawyer ? (
          <LawyerProfile 
            lawyer={selectedLawyer} 
            onBack={() => setSelectedLawyer(null)}
            onBookAppointment={handleBookAppointment}
          />
        ) : (
          <>
            {currentPage === 'home' && (
              <>
                <Hero onSearch={() => handleNavigate('find-lawyer')} />
                
                <ServiceCategories />

                <ActiveCases />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-7xl mx-auto">
                    <div className="md:col-span-2">
                         <section className="py-16 px-4 sm:px-6 lg:px-8">
                          <div className="flex justify-between items-end mb-8">
                            <div>
                              <h2 className="text-3xl font-extrabold text-slate-900">Top Rated Lawyers</h2>
                              <p className="mt-2 text-slate-600">Verified professionals ready to help you</p>
                            </div>
                            <button 
                              onClick={() => handleNavigate('find-lawyer')}
                              className="hidden md:block text-amber-600 font-bold hover:text-amber-700 transition-colors"
                            >
                              View All &rarr;
                            </button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {MOCK_LAWYERS.slice(0, 4).map(lawyer => (
                              <div key={lawyer.id} onClick={() => handleLawyerClick(lawyer)} className="cursor-pointer">
                                <LawyerCard lawyer={lawyer} onBookAppointment={handleBookAppointment} />
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-8 text-center md:hidden">
                            <button 
                              onClick={() => handleNavigate('find-lawyer')}
                              className="text-amber-600 font-bold hover:text-amber-700 transition-colors"
                            >
                              View All Lawyers &rarr;
                            </button>
                          </div>
                        </section>
                    </div>
                    <div className="md:col-span-1 border-l border-slate-200">
                        <Notifications />
                    </div>
                </div>

                <PeopleHelped />

                <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-6">Are you a Qualified Lawyer?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                      Join Ukil Chai to connect with clients, manage your appointments, and grow your practice online.
                    </p>
                    <button 
                      onClick={() => setIsLoginOpen(true)}
                      className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
                    >
                      Join as a Lawyer
                    </button>
                  </div>
                </section>
              </>
            )}

            {currentPage === 'find-lawyer' && (
              <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h1 className="text-3xl font-bold text-slate-900 mb-6">Find a Lawyer</h1>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-7 relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                          <input type="text" placeholder="Search by Name or Keyword" className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" />
                        </div>
                        <div className="md:col-span-3">
                          <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none bg-white">
                              <option>All Categories</option>
                              <option>Criminal</option>
                              <option>Civil</option>
                              <option>Family</option>
                              <option>Corporate</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                            Search
                          </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <p className="text-slate-600">{MOCK_LAWYERS.length} Lawyers found</p>
                  <button className="flex items-center text-slate-600 hover:text-slate-900 font-medium">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MOCK_LAWYERS.map(lawyer => (
                      <div key={lawyer.id} onClick={() => handleLawyerClick(lawyer)} className="cursor-pointer">
                        <LawyerCard lawyer={lawyer} onBookAppointment={handleBookAppointment} />
                      </div>
                    ))}
                  </div>
              </div>
            )}

            {currentPage === 'templates' && (
              <>
                {selectedTemplateCategory ? (
                  <TemplateDetail
                    category={selectedTemplateCategory}
                    templates={TEMPLATE_LIBRARY[selectedTemplateCategory.id] || []}
                    onBack={handleBackToTemplates}
                  />
                ) : (
                  <TemplateCategories
                    categories={TEMPLATE_CATEGORIES}
                    onSelectCategory={handleSelectTemplateCategory}
                  />
                )}
              </>
            )}
            
            {currentPage === 'about' && (
              <div className="bg-white">
                <div className="py-20 max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-extrabold text-slate-900 mb-8">About Ukil Chai</h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                      Ukil Chai is dedicated to making legal services accessible, transparent, and efficient for everyone in Bangladesh. 
                      We bridge the gap between clients and legal professionals through technology.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                      <div className="p-6 bg-slate-50 rounded-xl">
                        <div className="text-4xl font-bold text-amber-500 mb-2">500+</div>
                        <div className="text-slate-700 font-medium">Verified Lawyers</div>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-xl">
                        <div className="text-4xl font-bold text-amber-500 mb-2">10k+</div>
                        <div className="text-slate-700 font-medium">Successful Cases</div>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-xl">
                        <div className="text-4xl font-bold text-amber-500 mb-2">24/7</div>
                        <div className="text-slate-700 font-medium">Support Available</div>
                      </div>
                    </div>
                </div>
              </div>
            )}

            {currentPage === 'services' && (
                <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
                      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Comprehensive legal solutions tailored to your specific needs
                      </p>
                    </div>
                    <ServiceCategories />
                    
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="bg-slate-900 text-white p-8 rounded-2xl">
                          <h3 className="text-2xl font-bold mb-4">For Clients</h3>
                          <ul className="space-y-3 text-gray-300">
                             <li className="flex items-center">• Find specialized lawyers near you</li>
                             <li className="flex items-center">• Book consultations online</li>
                             <li className="flex items-center">• Secure document sharing</li>
                             <li className="flex items-center">• Transparent fee structures</li>
                          </ul>
                       </div>
                       <div className="bg-amber-500 text-slate-900 p-8 rounded-2xl">
                          <h3 className="text-2xl font-bold mb-4">For Lawyers</h3>
                          <ul className="space-y-3 font-medium">
                             <li className="flex items-center">• Build your digital presence</li>
                             <li className="flex items-center">• Manage appointments effortlessly</li>
                             <li className="flex items-center">• Expand your client base</li>
                             <li className="flex items-center">• Verified professional badge</li>
                          </ul>
                       </div>
                    </div>
                </div>
            )}
          </>
        )}

        {currentPage === 'profile' && (
          <UserProfile 
            onSwitchToCorporate={handleSwitchToCorporate}
          />
        )}

        {currentPage === 'corporate-profile' && (
          <CorporateProfile 
            onSwitchToConsumer={handleSwitchToConsumer}
          />
        )}
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
