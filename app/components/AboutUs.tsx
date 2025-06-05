"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import {
  HiCalendar,
  HiMegaphone,
  HiLightBulb,
  HiChartBar,
  HiCheck,
  HiComputerDesktop,
} from "react-icons/hi2";
import Image from "next/image";

const AboutUs = () => {
  const router = useRouter();

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.4 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: <HiCalendar className="w-8 h-8" />,
      title: "Προωθήσεις σε Καταστήματα & Υπαίθριες Προωθήσεις",
      description: "Προωθούμε τα προϊόντα σας σε καταστήματα και σε υπαίθριους χώρους για μεγαλύτερη έκθεση."
    },
    {
      icon: <HiMegaphone className="w-8 h-8" />,
      title: "Γευσιγνωσίες & Διανομή Προωθητικού Υλικού",
      description: "Διοργανώνουμε γευσιγνωσίες και διανέμουμε προωθητικό υλικό για να γνωρίσει το κοινό σας τα προϊόντα σας."
    },
    {
      icon: <HiLightBulb className="w-8 h-8" />,
      title: "Εκδηλώσεις, Events, Φεστιβάλ",
      description: "Οργανώνουμε και συμμετέχουμε σε εκδηλώσεις, συμβάντα και φεστιβάλ για την προώθηση του brand σας."
    },
    {
      icon: <HiChartBar className="w-8 h-8" />,
      title: "Δειγματοδιανομές",
      description: "Δειγματοδιανομές προϊόντων για άμεση εμπειρία και γνωριμία με το κοινό."
    },
    {
      icon: <HiComputerDesktop className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Διαχείριση και ανάπτυξη του ψηφιακού σας αποτυπώματος μέσα από στρατηγικές Social Media, Content Creator, φωτογραφίων/βίντεο και ιστοσελίδων."
    }
  ];

  const benefits = [
    {
      icon: <HiCheck className="w-6 h-6" />,
      title: "Εξειδίκευση και Εμπειρία",
      description: "Η ομάδα μας αποτελείται από επαγγελματίες με χρόνια εμπειρίας και εξειδίκευσης στον τομέα της προώθησης."
    },
    {
      icon: <HiCheck className="w-6 h-6" />,
      title: "Καινοτομία",
      description: "Αναζητούμε συνεχώς νέους και δημιουργικούς τρόπους για να προωθούμε τα προϊόντα και τις υπηρεσίες σας."
    },
    {
      icon: <HiCheck className="w-6 h-6" />,
      title: "Εξατομικευμένη Προσέγγιση",
      description: "Κατανοούμε ότι κάθε brand είναι μοναδικό και προσαρμόζουμε τις υπηρεσίες μας για να καλύψουμε τις συγκεκριμένες ανάγκες και στόχους σας."
    },
    {
      icon: <HiCheck className="w-6 h-6" />,
      title: "Αποτελεσματικότητα",
      description: "Δεσμευόμαστε να παρέχουμε υψηλής ποιότητας υπηρεσίες που αποδίδουν πραγματικά αποτελέσματα για το brand σας."
    }
  ];

  return (
    <div className="py-8 md:py-12 bg-gray-50">
      {/* Company Introduction */}
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 20 }}
        animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Η Εταιρεία μας</h2>
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="S.T.Promotion Logo"
            width={200}
            height={50}
            className="inline-flex"
          />
        </div>
        <div className="text-gray-600 space-y-4">
          <p className="text-lg">
            Η S.T.Promotion είναι μια ανεξάρτητη εταιρεία με έδρα την Καλαμάτα.
          </p>
          <p className="text-lg">
            Οι ιδρυτές της έχουν συνεργαστεί επί 15 έτη με εταιρείες promotion στην Αττική ως promoters, supervisor & bartenders γνωρίζοντας εκ των έσω τις απαιτήσεις και τις ανάγκες των προωθητικών ενεργειών.
          </p>
          <p className="text-lg">
            Αναλαμβάνουμε προωθητικές ενέργειες της επιχείρησης σας σε όλη την Πελοπόννησο μέσα από το δίκτυο συνεργατών μας σε: Καλαμάτα - Σπάρτη - Πύργο - Τρίπολη - Ναύπλιο
          </p>
        </div>
      </motion.div>

      {/* Services */}
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 20 }}
        animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">Οι Υπηρεσίες Μας</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-primary mb-6">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 20 }}
        animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">Γιατί Να Μας Επιλέξετε</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-primary flex-shrink-0 mt-1">{benefit.icon}</div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <button
          onClick={() => router.push("/contact")}
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          Επικοινωνήστε μαζί μας
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
