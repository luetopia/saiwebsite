import React, { useState } from 'react';
import { Mail, Send, Check, AlertCircle, Shield } from 'lucide-react';

interface FormData {
  email: string;
  gdprConsent: boolean;
}

interface FormErrors {
  email?: string;
  gdprConsent?: string;
}

const FooterNewsletter = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    gdprConsent: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail-Adresse ist erforderlich';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'Bitte stimmen Sie der Datenschutzerklärung zu';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate success (90% success rate for demo)
      const success = Math.random() > 0.1;
      
      if (success) {
        setSubmitStatus('success');
        setFormData({
          email: '',
          gdprConsent: false
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-red-800 border-b border-red-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Newsletter Container */}
        <div className="bg-red-900 rounded-2xl p-8 lg:p-12">
          <div className="max-w-2xl mx-auto text-center">
            
            {/* Newsletter Header */}
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-700 rounded-full p-4 mr-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  SAI Newsletter
                </h2>
                <p className="text-red-200">Bleiben Sie informiert</p>
              </div>
            </div>
            
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Erhalten Sie regelmäßig Neuigkeiten über Forschung, Veranstaltungen und 
              Entwicklungen am Südasien-Institut direkt in Ihr Postfach.
            </p>
            
            {/* Newsletter Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-red-800 rounded-lg p-4">
                <Check className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-white font-semibold mb-1">Forschung</div>
                <div className="text-red-200 text-sm">Aktuelle Projekte & Ergebnisse</div>
              </div>
              <div className="bg-red-800 rounded-lg p-4">
                <Check className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-white font-semibold mb-1">Veranstaltungen</div>
                <div className="text-red-200 text-sm">Konferenzen & Workshops</div>
              </div>
              <div className="bg-red-800 rounded-lg p-4">
                <Check className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-white font-semibold mb-1">2-3x pro Monat</div>
                <div className="text-red-200 text-sm">Keine Spam-Mails</div>
              </div>
            </div>
            
            {/* Newsletter Form */}
            <div className="max-w-lg mx-auto">
              {submitStatus === 'success' ? (
                <div className="bg-green-600 rounded-lg p-6 text-center">
                  <Check className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2">Erfolgreich angemeldet!</h3>
                  <p className="text-green-100">
                    Sie erhalten in Kürze eine Bestätigungs-E-Mail. Vielen Dank für Ihr Interesse!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <div className="flex">
                      <div className="relative flex-1">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Ihre E-Mail-Adresse"
                          className={`w-full pl-10 pr-4 py-4 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-300 bg-white text-gray-900 ${
                            errors.email ? 'border-red-300' : 'border-gray-300'
                          }`}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-8 py-4 rounded-r-lg font-semibold transition-colors flex items-center ${
                          isSubmitting
                            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                            : 'bg-white text-red-600 hover:bg-red-50'
                        }`}
                      >
                        {isSubmitting ? (
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-600"></div>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            <span>Anmelden</span>
                          </>
                        )}
                      </button>
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-200 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* GDPR Consent */}
                  <div>
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="gdprConsent"
                        name="gdprConsent"
                        checked={formData.gdprConsent}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-red-600 border-red-300 rounded focus:ring-red-500 bg-white"
                      />
                      <label htmlFor="gdprConsent" className="text-sm text-red-100 text-left">
                        Ich stimme der Verarbeitung meiner Daten für den Newsletter zu und habe die 
                        <a href="/datenschutz" className="text-white hover:text-red-200 underline mx-1">
                          Datenschutzerklärung
                        </a>
                        gelesen.
                      </label>
                    </div>
                    {errors.gdprConsent && (
                      <p className="mt-2 text-sm text-red-200 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.gdprConsent}
                      </p>
                    )}
                  </div>

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-700 border border-red-600 rounded-lg p-4">
                      <div className="flex items-center text-red-100">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        <p className="text-sm">
                          Fehler bei der Anmeldung. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Privacy Note */}
                  <div className="flex items-center justify-center space-x-2 text-red-200">
                    <Shield className="w-4 h-4" />
                    <p className="text-xs">
                      Ihre Daten sind sicher geschützt. Abmeldung jederzeit möglich.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNewsletter;