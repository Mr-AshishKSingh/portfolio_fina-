import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Terminal, Code, Wifi } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-mono">
            <span className="text-gray-500">~/usr/bin/</span>contact<span className="text-yellow-400 animate-pulse">_</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-600 font-mono text-sm">
              <span className="text-green-400">$</span> <span className="text-white">./initiate_connection.sh --mode=collaborate</span>
            </div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto font-mono text-sm">
            <span className="text-gray-500"># </span>Ready to build something amazing together? Let's establish a connection.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Terminal Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Terminal Window */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between bg-gray-900 px-4 py-3 rounded-t-lg border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <Terminal size={16} className="text-gray-400 ml-2" />
                  <span className="text-white font-mono text-sm">contact_info.sh</span>
                </div>
                <div className="text-xs text-gray-400 font-mono">bash</div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-4">
                <div className="text-green-400 mb-4">
                  <span className="text-gray-500">$</span> ./get_contact_details.sh
                </div>
                
                <div className="space-y-3">
                  {[
                    {
                      icon: Mail,
                      command: 'echo $EMAIL',
                      output: 'officialwork.ashish@gmail.com',
                      href: 'mailto:officialwork.ashish@gmail.com'
                    },
                    {
                      icon: Phone,
                      command: 'echo $PHONE',
                      output: '+91 7457008912',
                      href: 'tel:+91 7457008912'
                    },
                    {
                      icon: MapPin,
                      command: 'curl -s ipinfo.io/city',
                      output: 'Greater Noida',
                      href: '#'
                    },
                    {
                      icon: Wifi,
                      command: 'ping -c 1 response_time.dev',
                      output: 'Status: Always Online',
                      href: '#'
                    }
                  ].map(({ icon: Icon, command, output, href }, index) => (
                    <motion.a
                      key={command}
                      href={href}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="block group"
                    >
                      <div className="flex items-center space-x-3 p-3 bg-gray-900 rounded border border-gray-700 hover:border-green-500 transition-all duration-300">
                        <Icon className="w-4 h-4 text-green-400" />
                        <div className="flex-1">
                          <div className="text-gray-400 text-xs">$ {command}</div>
                          <div className="text-white group-hover:text-green-400 transition-colors">{output}</div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="text-gray-400 text-xs mb-2">$ cat ~/README.md | grep -A 4 "collaboration"</div>
                  <div className="bg-gray-900 p-3 rounded border border-gray-700">
                    <div className="text-gray-300 space-y-1 text-xs">
                      <div><span className="text-blue-400"># Why collaborate with me?</span></div>
                      <div>✓ Fast response time (&lt; 24hrs)</div>
                      <div>✓ Quality-focused development</div>
                      <div>✓ Regular git commits & updates</div>
                      <div>✓ Clean, documented code</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Monitor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg border border-gray-700 p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-mono text-sm">System Status</span>
                </div>
                <span className="text-green-400 font-mono text-xs">ONLINE</span>
              </div>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Availability:</span>
                  <span className="text-green-400">99.9% uptime</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="text-green-400">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Status:</span>
                  <span className="text-green-400">Ready for new projects</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Terminal Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg border border-gray-700 shadow-xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between bg-gray-900 px-4 py-3 rounded-t-lg border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <Code size={16} className="text-blue-400 ml-2" />
                <span className="text-white font-mono text-sm">message_composer.py</span>
              </div>
              <div className="text-xs text-gray-400 font-mono">Python</div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {/* Command Prompt */}
              <div className="mb-6 font-mono text-sm">
                <div className="text-green-400 mb-2">
                  <span className="text-gray-500">$</span> python3 send_message.py --interactive
                </div>
                <div className="text-gray-400">Initializing secure connection...</div>
                <div className="text-green-400">✓ Connection established</div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-green-400 mb-2 font-mono">
                      --name=
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded text-white font-mono focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-400 mb-2 font-mono">
                      --email=
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded text-white font-mono focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-400 mb-2 font-mono">
                    --subject=
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded text-white font-mono focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                    placeholder="Project collaboration"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-400 mb-2 font-mono">
                    --message=
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded text-white font-mono focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 resize-none"
                    placeholder="# Describe your project or idea here
# What technologies are you considering?
# Timeline and budget expectations?"
                  ></textarea>
                </div>

                {/* Terminal Output */}
                <div className="bg-gray-900 p-4 rounded border border-gray-700 font-mono text-sm">
                  <div className="text-gray-400 mb-2">Message validation:</div>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <span className={`mr-2 ${formData.name ? 'text-green-400' : 'text-gray-600'}`}>
                        {formData.name ? '✓' : '○'}
                      </span>
                      <span className="text-gray-400">Name field</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`mr-2 ${formData.email ? 'text-green-400' : 'text-gray-600'}`}>
                        {formData.email ? '✓' : '○'}
                      </span>
                      <span className="text-gray-400">Email validation</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`mr-2 ${formData.subject ? 'text-green-400' : 'text-gray-600'}`}>
                        {formData.subject ? '✓' : '○'}
                      </span>
                      <span className="text-gray-400">Subject defined</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`mr-2 ${formData.message ? 'text-green-400' : 'text-gray-600'}`}>
                        {formData.message ? '✓' : '○'}
                      </span>
                      <span className="text-gray-400">Message content</span>
                    </div>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded font-mono font-semibold transition-all duration-300 flex items-center justify-center ${
                    isSubmitted
                      ? 'bg-green-700 text-white border border-green-600'
                      : 'bg-gray-700 text-white hover:bg-green-700 hover:border-green-600 border border-gray-600'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      $ Message transmitted successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      $ python3 send_message.py --execute
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
