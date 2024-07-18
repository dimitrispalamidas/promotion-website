"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import {
  FaRegCalendarCheck,
  FaBullhorn,
  FaLightbulb,
  FaChartLine,
  FaCheck,
} from "react-icons/fa";
import Image from "next/image";

const AboutUs = () => {
  const router = useRouter();

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.4 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id='about-us'
      className='container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg'
    >
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, x: -100 }}
        animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className='text-3xl font-bold mb-4 text-[#8B0000]'>
          Η Εταιρεία μας
        </h2>
        <div className='mb-4 text-gray-800 text-lg leading-relaxed font-roboto'>
          Η{" "}
          <Image
            src={"/logo.png"}
            alt='Logo of STPromotion'
            width={200}
            height={50}
            className='inline-flex'
          />{" "}
          είναι μια ανεξάρτητη εταιρεία με έδρα την Καλαμάτα.
          <br />
          <p>
            Οι ιδρυτές της έχουν συνεργαστεί επί 15 έτη με εταιρείες promotion
            στην Αττική ως promoters, supervisor & bartenders γνωρίζοντας εκ των
            έσω τις απαιτήσεις και τις ανάγκες των προωθητικών ενεργειών.
          </p>
          <p>
            Αναλαμβάνουμε προωθητικές ενέργειες της επιχείρησης σας σε όλη την
            Πελοπόννησο μέσα από το δίκτυο συνεργατών μας σε: Καλαμάτα - Σπάρτη
            - Πύργο - Τρίπολη - Ναύπλιο
          </p>
        </div>
      </motion.div>
      <hr className='my-6 border-gray-300' />
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, x: 100 }}
        animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h3 className='text-2xl font-semibold mb-6 text-[#8B0000]'>
          Οι Υπηρεσίες Μας
        </h3>
        <ul className='list-disc list-inside mb-4 text-gray-800 text-lg leading-relaxed font-roboto'>
          <li className='mb-2 flex items-start'>
            <FaRegCalendarCheck className='text-[#8B0000] mr-2 w-4 h-4 flex-shrink-0' />
            <div>
              <strong>
                Προωθήσεις σε Καταστήματα & Υπαίθριες Προωθήσεις:{" "}
              </strong>
              Προωθούμε τα προϊόντα σας σε καταστήματα και σε υπαίθριους χώρους
              για μεγαλύτερη έκθεση.
            </div>
          </li>
          <li className='mb-2 flex items-start'>
            <FaBullhorn className='text-[#8B0000] mr-2 w-4 h-4 flex-shrink-0' />
            <div>
              <strong>Γευσιγνωσίες & Διανομή Προωθητικού Υλικού: </strong>
              Διοργανώνουμε γευσιγνωσίες και διανέμουμε προωθητικό υλικό για να
              γνωρίσει το κοινό σας τα προϊόντα σας.
            </div>
          </li>
          <li className='mb-2 flex items-start'>
            <FaLightbulb className='text-[#8B0000] mr-2 w-4 h-4 flex-shrink-0' />
            <div>
              <strong>Εκδηλώσεις, Events, Φεστιβάλ: </strong>
              Οργανώνουμε και συμμετέχουμε σε εκδηλώσεις, συμβάντα και φεστιβάλ
              για την προώθηση του brand σας.
            </div>
          </li>
          <li className='mb-2 flex items-start'>
            <FaChartLine className='text-[#8B0000] mr-2 w-4 h-4 flex-shrink-0' />
            <div>
              <strong>Δειγματοδιανομές: </strong> Δειγματοδιανομές προϊόντων για
              άμεση εμπειρία και γνωριμία με το κοινό.
            </div>
          </li>
        </ul>
      </motion.div>
      <hr className='my-6 border-gray-300' />
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, x: -100 }}
        animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h3 className='text-2xl font-semibold mb-6 text-[#8B0000]'>
          Γιατί Να Μας Επιλέξετε
        </h3>
        <ul className='list-disc list-inside mb-4 text-gray-800 text-lg leading-relaxed font-roboto'>
          <li className='mb-2 flex items-start'>
            <FaCheck className='text-[#8B0000] mr-2 w-4 h-4 flex-shrink-0' />
            <div>
              <strong>Εξειδίκευση και Εμπειρία:</strong> Η ομάδα μας αποτελείται
              από επαγγελματίες με χρόνια εμπειρίας και εξειδίκευσης στον τομέα
              της προώθησης.
            </div>
          </li>
          <li className='mb-2 flex items-start'>
            <FaCheck className='text-[#8B0000] mr-2 w-4 h-4 flex-shrink-0' />
            <div>
              <strong>Καινοτομία:</strong> Αναζητούμε συνεχώς νέους και
              δημιουργικούς τρόπους για να προωθούμε τα προϊόντα και τις
              υπηρεσίες σας.
            </div>
          </li>
          <li className='mb-2 flex items-start'>
            <FaCheck className='text-[#8B0000] mr-2 w-4 h-4 flex-shrink-0' />
            <div>
              <strong>Εξατομικευμένη Προσέγγιση:</strong> Κατανοούμε ότι κάθε
              brand είναι μοναδικό και προσαρμόζουμε τις υπηρεσίες μας για να
              καλύψουμε τις συγκεκριμένες ανάγκες και στόχους σας.
            </div>
          </li>
          <li className='mb-2 flex items-start'>
            <FaCheck className='text-[#8B0000] mr-2 w-4 h-4 flex-shrink-0' />
            <div>
              <strong>Αποτελεσματικότητα:</strong> Δεσμευόμαστε να παρέχουμε
              υψηλής ποιότητας υπηρεσίες που αποδίδουν πραγματικά αποτελέσματα
              για το brand σας.
            </div>
          </li>
        </ul>
      </motion.div>
      <div className='text-center mt-8'>
        <button
          onClick={() => router.push("/contact")}
          className='bg-[#8B0000] text-white py-2 px-6 rounded-lg hover:bg-[#A52A2A] transition duration-300'
        >
          Επικοινωνήστε μαζί μας
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
