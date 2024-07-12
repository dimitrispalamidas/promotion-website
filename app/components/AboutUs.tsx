"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className='container mx-auto my-8 p-4 bg-white rounded-lg shadow-lg'>
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, x: -100 }}
        animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.75 }}
      >
        <h2 className='text-3xl font-bold mb-4 text-blue-900'>
          Σχετικά με Εμάς
        </h2>
        <p className='mb-4 text-gray-700'>
          Καλώς ήρθατε στην <strong>My-Promotion-Company</strong>, την κορυφαία
          εταιρεία προώθησης που αφοσιώνεται στο να δίνει ζωή και φωνή στο brand
          σας. Η αποστολή μας είναι να δημιουργούμε δυναμικές και αξέχαστες
          εμπειρίες που συνδέουν το κοινό σας με το προϊόν ή την υπηρεσία σας.
        </p>
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, x: 100 }}
        animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.75 }}
      >
        <h3 className='text-2xl font-semibold mb-2 text-blue-800'>
          Οι Υπηρεσίες Μας
        </h3>
        <ul className='list-disc list-inside mb-4 text-gray-700'>
          <li className='mb-2'>
            <strong>Δημιουργία Εκδηλώσεων:</strong> Οργανώνουμε εκδηλώσεις που
            ενισχύουν την αναγνωρισιμότητα του brand σας και δημιουργούν
            ισχυρούς δεσμούς με το κοινό σας.
          </li>
          <li className='mb-2'>
            <strong>Προωθητικές Ενέργειες:</strong> Από δειγματοδιανομές μέχρι
            καμπάνιες στα social media, σχεδιάζουμε στρατηγικές προώθησης που
            προσελκύουν και διατηρούν το ενδιαφέρον των πελατών σας.
          </li>
          <li className='mb-2'>
            <strong>Brand Activation:</strong> Ενεργοποιούμε το brand σας με
            πρωτότυπες και διαδραστικές ενέργειες που ενισχύουν την ταυτότητά
            σας και δημιουργούν αξέχαστες εμπειρίες.
          </li>
          <li className='mb-2'>
            <strong>Στρατηγικό Μάρκετινγκ:</strong> Αναλύουμε την αγορά και το
            κοινό σας, και δημιουργούμε προσαρμοσμένες στρατηγικές μάρκετινγκ
            που οδηγούν σε μετρήσιμα αποτελέσματα.
          </li>
        </ul>
      </motion.div>
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, x: -100 }}
        animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.75 }}
      >
        <h3 className='text-2xl font-semibold mb-2 text-blue-800'>
          Γιατί Να Μας Επιλέξετε
        </h3>
        <ul className='list-disc list-inside mb-4 text-gray-700'>
          <li className='mb-2'>
            <strong>Εξειδίκευση και Εμπειρία:</strong> Η ομάδα μας αποτελείται
            από επαγγελματίες με χρόνια εμπειρίας και εξειδίκευσης στον τομέα
            της προώθησης.
          </li>
          <li className='mb-2'>
            <strong>Καινοτομία:</strong> Αναζητούμε συνεχώς νέους και
            δημιουργικούς τρόπους για να προωθούμε τα προϊόντα και τις υπηρεσίες
            σας.
          </li>
          <li className='mb-2'>
            <strong>Εξατομικευμένη Προσέγγιση:</strong> Κατανοούμε ότι κάθε
            brand είναι μοναδικό και προσαρμόζουμε τις υπηρεσίες μας για να
            καλύψουμε τις συγκεκριμένες ανάγκες και στόχους σας.
          </li>
          <li className='mb-2'>
            <strong>Αποτελεσματικότητα:</strong> Δεσμευόμαστε να παρέχουμε
            υψηλής ποιότητας υπηρεσίες που αποδίδουν πραγματικά αποτελέσματα για
            το brand σας.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default AboutUs;
