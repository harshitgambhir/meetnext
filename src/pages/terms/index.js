import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/Button';

const terms = () => {
  return (
    <div className='bg-gray-50'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex items-center px-4 sm:px-6 py-8 justify-between space-x-10 '>
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className='flex items-center'>
                <Image className="w-auto" height={40} width={128} src="/images/inmeet.png" alt="" objectFit='contain' />
              </a>
            </Link>
          </div>
          <div className="items-center justify-end flex">
            <Button
              text='Login / Sign up'
              className='w-auto'
              link
              href='/login'
            />
          </div>
        </div>
        <div className='px-4'>
          <div className='flex flex-col mt-4'>
            <div className='text-3xl md:text-4xl pt-10 font-bold leading-normal md:leading-normal'>Terms and Conditions</div>
            <p className='mt-4 whitespace-pre-line'>
              {`
              You must carefully read and understand these terms and conditions before downloading, installing and using the Inmeet mobile application ("Platform") which is licensed to and operated by Inmeet. For the purpose of these terms and conditions, any reference to Inmeet shall include its affiliates, parent company, and sister concerns. These terms and conditions ("Terms") as well as the [Privacy Policy](https://inmeet.co/terms) and all other applicable laws and regulations govern Your access and use of the Platform , irrespective of whether you are a registered user or a visitor (which means that you simply browse the platform without limitation, through a mobile or other wireless device, or otherwise use the Platform without being registered). The terminologies "You", "Your", "User" And "Users" shall be read in context, and shall refer to You. By using or accessing or downloading the Platform to view content by You, You agree to be bound by these terms.
              
              In case of an organization, company or branch of government, You represent and warrant that You have the authority to legally bind Your company or organization and Your company or organization will be bound by the obligations and restrictions of these terms. Any and all references herein to 'You' or 'Your' will include Your company or organization.
              
              If You do not agree to the terms or do not have the authority to bind Your organization or company to these terms, then do not access, avail, download or use the Platform.
              
              It is understood that this terms and conditions shall constitute an agreement between you and Inmeet.
              
              1. About the Platform
              
              Inmeet is a unique mobile application or software technology that allows You to view and share content ("Content").
              
              2. Eligibility
              
              Use and access to the Platform is available to all persons who can be legally bound by contract and who are not disqualified or declared incompetent under the Indian Contract Act, 1872. If You are a minor i.e. under the age of 13 years, You shall not register as a User of the Platform and shall not access or use the Platform. As a minor if You wish to access or use the Platform, such access or use may be made by Your legal guardian or parents on the Platform. Inmeet reserves the right to terminate such use and/ or refuse to provide You with access to the Platform if it is brought to Inmeet's notice or if it is discovered that You are under the age of 13 years.
              
              3. Term and Termination
              
              These Terms, and any posted revision, shall remain in full force and effect while you use the Platform and certain provisions may continue to apply even after termination. You may terminate this Agreement by uninstalling or deleting the Platform at any time, for any reason. Inmeet may terminate this Agreement by deleting Your account or profile without assigning any reasons whatsoever. On termination of this Agreement, all of Your profile Content and other information may be deleted. However, certain details are maintained with us for archival and legal purposes. Inmeet reserves the right to change these Terms from time to time. If You do not agree to any such changes, You have the discretion to discontinue from accessing, availing or using the Platform. Continued access or use of the Platform following notice of any such changes will indicate Your acknowledgement of such changes and You will be bound by such revised Terms.
              
              4. Communications
              
              When You use the Platform or send emails or other data, information or communication to Inmeet, You agree and understand that You are communicating with Inmeet through electronic records and You consent to receive communications via electronic records from Inmeet periodically and as and when required. Inmeet may communicate with You by email provided by You in Your communications or at the time of registration or by any other mode of communication, electronic or otherwise. However, Inmeet does not assure any confidentiality or security of information provided to Inmeet from Your side.
              
              5. Your License and Use of the Platform
              
              5.1. Subject to the Terms and Conditions and Your payment of required fees, if any, Inmeet hereby grants You only a limited, non-transferrable, non-exclusive, revocable license to make personal and non-commercial use of the Platform.
              
              5.2. The Platform is licensed, not sold, to You, even after installation on Your devices. Inmeet may assign this License Agreement or any part of it without restrictions. You are not allowed to assign, transfer or sub-license Your rights under this license, to any third party.
              
              6. Proprietary Rights in Content
              
              6.1. You hereby grant Inmeet a worldwide, irrevocable, royalty-free, perpetual and unlimited license to make copies of, reproduce, adapt, make derivative works of, communicate to the public, broadcast, and make available your Content and the Content made available by You on the Platform. You understand and agree that Inmeet may exercise these rights in the Content on the Platform or on other platforms, applications and social media pages under its control. You represent that you are authorized to grant these rights to Inmeet in accordance with the terms and conditions and policies of this Platform, and all applicable laws and regulations.
              
              6.2 Inmeet and its affiliates hold no responsibility and are not liable for any Content shared by or accessible by You through Your use of the Platform. You acknowledge that the Platform is merely an intermediary/ enabling technology that allows You to access and share Content. In no event shall Inmeet or its affiliates assume or have any responsibility or liability for the Content shared or accessed by use of the Platform or for any claims, damages or losses resulting from the use of the Content.
              
              6.2. You acknowledge and concede that the Content accessible by use of the Platform is the property of the concerned User and may be the subject of proprietary and other rights of such content providers including any Intellectual Property Rights. You are not permitted to distribute, download/use/access, transmit, republish, display, sell, license or otherwise communicate the Content to the public in any manner except via the features provided in the Platform.
              
              7. Activity Prohibited
              
              7.1. You agree, undertake and confirm that Your use of the Platform shall be strictly governed by, including but not limited to the following:
              
              - You shall not illegally download/save the Content accessed through the Platform at any given time, or circumvent any technological measures employed by Inmeet to prevent unauthorised access to or copying of Content or any part of the Platform.
              - You shall not alter or modify any part of the Platform and/or use the Platform for any illegal purpose.
              - You shall not reformat or frame any portion of any web page that is part of the Platform.
              - You shall not collect or harvest or attempt to collect personal data, or any other kind of information about other Users, including without limitation, through spidering or any form of scraping.
              - The Platform is not intended to be used to upload news/current affairs content, and Inmeet reserves the right to take down any such content and/or to block any users that post such content.
              - You shall not post advertisements, promotions or solicitations of business or solicit Users or post spam or any other form of solicitation or spam; post or transmit any communication or solicitation designed or intended to obtain the password, account or private information from any other User.
              - You shall not deliberately impersonate another person, whether real or fictional or otherwise misrepresent Your affiliation with a person or entity, for example, by registering an account in the name of another person or company, or sending messages or making comments using the name of another person impersonate other Users or otherwise fake Your identity.
              - You shall not rent, sell or transfer or lease or offer to sell or transfer access to the Platform and/or any Inmeet account or permit any third parties to use Your name and password, or any Content on the Platform.
              - You shall not rent, sell or transfer or lease or offer to sell or transfer access to the Platform and/or any Inmeet account or permit any third parties to use Your name and password, or any Content on the Platform.
              - You shall not resell or commercially use the Platform or any of its Content, or download or copy account information for the benefit of Yourself or any third-party. The Platform is for personal use only and may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose.
              - You shall not authorize any third party to use Your account.
              - You shall not commit or engage in, or encourage, induce, solicit or promote, any conduct that would constitute a criminal offence, give rise to civil liability or otherwise violate any law or regulation; or use the Platform for any illegal or unauthorized purpose; You agree to comply with all local laws applicable to Your conduct and the content and information, including hyperlinks, that You upload, store, share or transmit using the Platform.
              - You shall not alter or remove, attempt to alter or remove any trademark, copyright or other proprietary or legal notices contained in, or appearing on, the Platform or on any Content appearing on the Platform. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, content, music, text, page layout, or form) of Inmeet and our affiliates or other Users. You may not use any meta-tags or any other "hidden text" utilizing Inmeet's name or trademarks without the express written consent of Inmeet. Any unauthorized use terminates the permission or license granted by Inmeet. You may not use any Inmeet logo or other proprietary graphic or trademark as part of the link without Inmeet's advance express written permission.
              - You shall not employ scraping or similar techniques to aggregate, repurpose, adapt, copy, republish, make available or otherwise communicate to the public, display, perform, transfer, share, distribute or otherwise use or exploit the Content except via the features provided in the Platform.
              - You shall not, permit any third party to, copy or adapt the object code of the Platform, or reverse engineer, reverse assemble, decompile, modify or attempt to discover any source or object code of any part of the Platform, or circumvent or attempt to circumvent or copy any copy protection mechanism or access any rights management information pertaining to the Content or Platform.
              - You shall not transmit any viruses, worms, defects, Trojan horse, cancel bots, spyware, other items of a contaminating or destructive nature, adware, packet or IP spoofing, forged routing or electronic mail address information or similar methods or technology harmful code, flood pings, malware, bot, time bomb, worm, or other harmful or malicious component, which or might overburden, impair or disrupt the Platform or networks forming part of, or connected to, the Platform, or which does or might restrict or inhibit any other User's use and enjoyment of the Platform.
              - You shall not stalk, exploit, threaten, abuse or otherwise harass another User, or any Inmeet employee.
              - You shall not violate, circumvent or attempt to violate or circumvent any data security measures employed by Inmeet; access or attempt to access data or materials which are not intended for Your use; log into, or attempt to log into, an account which You are not authorized to access; attempt to scan or test the vulnerability of Inmeet's server, system or network or attempt to breach Inmeet's data security or authentication procedures; attempt to interfere with the Platform by any means including, without limitation, hacking Inmeet's servers or systems, submitting a virus, overloading, mail-bombing or crashing. insult, harass, threaten, molest or intimidate other Users.
              - You shall not use any robot, spider, offline readers, site search and/or retrieval application, or other device to retrieve or index any portion of the Platform, with the exception of public search engines; use any robot, spider, scraper or other automated means to access, analyze or copy the Platform and/or information (whether our information or other User's information).
              - You shall at all times ensure full compliance with the applicable provisions of the Information Technology Act, 2000 and rules there under as applicable and as amended from time to time and also all applicable Domestic laws, rules and regulations (including the provisions of any applicable Exchange Control Laws or Regulations in Force) and International Laws, Foreign Exchange Laws, Statutes, Ordinances and Regulations (including, but not limited to Sales Tax/VAT, Income Tax, Service Tax, Central Excise, Custom Duty, Local Levies).
              - You agree to comply with the above conditions and acknowledge that Inmeet has the right, in its sole discretion, to terminate Your account or take action as in our sole discretion is necessary if You breach any of the above conditions or any of the other provisions of this Terms.
              - You understand that Inmeet has the right at all times to disclose any information (including the identity of the persons providing information or materials on the Platform) as necessary to satisfy any law, regulation or valid governmental request. This may include, without limitation, disclosure of the information in connection with investigation of alleged illegal activity or solicitation of illegal activity or in response to a lawful court order. In addition, Inmeet may (and You hereby expressly authorize Inmeet to) disclose any information about You to law enforcement or other government officials, as Inmeet, in its sole discretion, believes necessary or appropriate in connection with the investigation and/or resolution of possible crimes, especially those that may involve personal injury; Throughout these Terms, Inmeet's prior written consent means a communication coming from Inmeet's Legal Department, specifically in response to Your request, and specifically addressing the activity or conduct for which You seek authorization.
              
              8 Third Party Content
              
              8.1. The Platform may provide access to third-party websites that are not owned or controlled by Inmeet. Inmeet is not responsible for any third-party Content, applications, services, advertisements, and/or links that may be contained in the Platforms.
              
              8.2 The Platform may provide access to third-party games, quizzes, and other such activities requiring skill, for which prizes may be awarded by the concerned third-party. Inmeet does not own or control these third-party games or other activities, and does not control or undertake any liability for declaring results or awarding prizes.
              
              8.3 If You have any complaints or concerns regarding third-party content or third-party activities on the Platform, You agree to report your complaints through the takedown process. You further agree and acknowledge that Inmeet will handle Your complaints in accordance with the applicable law.
              
              8.4. You shall not copy reproduce, republish, upload, post, publicly display, encode, translate, transmit, download or distribute the Platform or any Content in any way (including "mirroring") to any other computer, server, website or other medium for publication or distribution or for any commercial enterprise. Inmeet shall have all the rights to take necessary action and claim damages in case of any violation. Such action may also involve terminating Your permission to use the Platform by deleting Your Account.
              
              8.5. You may use general information about the Platform expressly permitted, provided that You (1) do not remove any proprietary notice language in all copies of such documents, (2) use such Content only for Your personal, non-commercial informational purpose unless agreed otherwise through an agreement and do not copy or post such Content on any networked computer or broadcast it in any media, (3) make no modifications to any such Content, and (4) do not make any additional representations or warranties relating to such documents.
              
              9 Representations and Warranties
              
              9.1 This Platform and the Content under it are provided by Inmeet "as is" and on an "as available" basis and Inmeet and its affiliates (including Inmeet Infotech), and their officers, directors, employees, and agents make no warranties and hereby disclaim any express or implied warranties, including, but not limited to, the implied warranties (collectively, "warranties") of merchantability and fitness for a particular purpose are disclaimed. In no event shall Inmeet be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this Platform, even if advised of the possibility of such damage.
              
              9.2. You agree that Your use of the Platform shall be at Your sole risk. To the fullest extent permitted by law, Inmeet disclaims all warranties, express or implied, in connection with the use of the Platform.
              
              9.3. Inmeet makes no representations or guarantee that the Platform will be free from loss, destruction, damage, any unauthorized access to or use of Inmeet's secure servers and/or any and all personal information and/or financial information stored therein, corruption, attack, any interruption or cessation of transmission to or from the Platform, any bugs, viruses, Trojan horses, or the like which may be transmitted to or through the Platform by any third party, and/or any errors or omissions in any content or for any loss or damage of any kind incurred as a result of the use of any of the Content accessible via the Platform. Inmeet does not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the services or any hyperlinked services or featured in any banner or other advertising, and Inmeet will not be a party to or in any way be responsible for monitoring any transaction between You and third-party providers of products or services. As with the purchase of a product or service through any medium or in any environment, You should use Your best judgment and exercise caution, interference, personal injury or property damage, of any nature whatsoever, resulting from Your access to and use of the Platform, hacking, or other security intrusion, and Inmeet disclaims any liability relating thereto.
              
              9.4. Inmeet makes no guarantees, representations, or warranties that use or results of the use of the Platform will be accurate, timely, reliable, uninterrupted, or without errors. Without prior notice, Inmeet may modify, suspend, or discontinue any part or all of the Platform or Your use of the Platform. In such event, Inmeet or its affiliates (including Inmeet Innovation) will not be liable to You or any third party.
              
              9.5. Inmeet makes no guarantees, representations, or warranties that Content accessible through the Platform by the User or the links provided by third parties will be free of viruses or similar contamination or destructive features. You agree that You assume all risk as to the quality and performance of the Platform and the accuracy and completeness of the Content.
              
              9.6. You understand that You may encounter offensive, indecent, or other objectionable content while using the Platform and that You may be involuntarily exposed to such offensive and obscene materials. It also is possible for others to obtain personal information about You due to Your use of the Platform, and that the recipient may use such information to harass or injure you. Inmeet does not approve of such unauthorized use, but by using the Platform You acknowledge and agree that Inmeet is not responsible for any such illegitimate use of any personal information so obtained by others.
              
              10 Privacy
              
              Inmeet may collect some of Your personal information and data while accessing, availing and/or using the Platform. Such information collected is only attributed to the functionality of the Platform and for no other purpose whatsoever. You may read Inmeet's Privacy Policy by visiting the following link: [Privacy policy](https://inmeet.co/terms).
              
              11 Disclaimers
              
              11.1. THE PLATFORM, ITS FEATURES AND CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE", AND "WITH ALL FAULTS".
              
              11.2. Your correspondence or business dealings with, or participation in promotions of, advertisers or activity providers found on or through the Platform, including payment and delivery of related products or Services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between You and such advertiser or activity provider. Inmeet shall not be responsible or liable for any loss or damage of any sort incurred as the result of any such dealings or as the result of the presence of such advertisers or activity providers on the Platform.
              
              11.3. Inmeet shall have all the rights to take necessary action and claim damages that may occur due to Your involvement/participation in any way on Your own or through group/s of people, intentionally or unintentionally in DoS/DDoS (Distributed Denial of Services).
              
              12 Intellectual Property Rights
              
              12.1. The copyright, trademark, patent or other intellectual property rights in the Platform (including, without limitation, all designs, logos, names, text code, processes, data, information links) are owned by Inmeet or the respective third-party entities as identified in the Platform. No license or right is granted and Your use of and/or the Platform therein shall not constitute by implication, estoppel or otherwise, any license or right of use. As such, You shall not reproduce, transmit, republish, upload, post, perform, broadcast, adapt, parody, distribute, display, license and/or alter in whole or in part any of the foregoing in any manner without the express permission from Inmeet.
              
              12.2. You shall not download or encourage others to download copyrighted works, trademarks, or other proprietary information without obtaining the prior written consent of the owner of the Content. In the event of infringement Inmeet shall on its own sole discretion take necessary steps.
              
              12.3. By posting Content on the Platform, You confirm that You are the owner of all Content and underlying works contained therein, or are authorised by the owner to make the Content available through the Platform.
              
              13 Indemnity
              
              13.1. You hereby agree to indemnify, defend and hold Inmeet and its affiliates (including Inmeet Innovation), and their officers, directors and employees, harmless from and against any and all damages, liabilities, costs and expenses, including attorney's fees and expenses, arising out of, incident to, or resulting directly or indirectly from the use of the Platform in a manner inconsistent with this Terms. Notwithstanding its reasonable efforts, Inmeet and its affiliates (including Inmeet Innovation) cannot take responsibility or control the Content made for access through the Platform.
              
              14 No Liability
              14.1. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL Inmeet OR ITS AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL OR CONSEQUENTIAL DAMAGES, FOR LOSS OF PROFITS OR CONFIDENTIAL OR OTHER INFORMATION, FOR BUSINESS INTERRUPTION, FOR PERSONAL INJURY, FOR LOSS OF PRIVACY, FOR FAILURE TO MEET ANY DUTY INCLUDING OF GOOD FAITH OR OF REASONABLE CARE, FOR NEGLIGENCE, AND FOR ANY OTHER PECUNIARY OR OTHER LOSS WHATSOEVER ARISING OUT OF OR IN ANY WAY RELATED TO THE USE OR INABILITY TO USE THE PLATFORM AND ANY LOSS OR DAMAGE ARISING OUT OF OR IN RELATION TO ACTS OF GOD OR ACT OF THIRD PARTY THAT IS BEYOND THE CONTROL OF Inmeet OR ITS AFFILIATES.
              14.2. Inmeet OR ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY DIRECT OR INDIRECT DAMAGE FOR ANY DATA PROVIDED BY THE User OR ANY VIOLATION OF THIRD-PARTY RIGHTS OF WHATSOEVER NATURE, ARISING OUT OF OR IN ANY MANNER RELATED TO THE USE OR INABILITY TO USE THE PLATFORM.
              
              15 Law, Jurisdiction and Arbitration
              15.1. The construction of these Terms shall be determined in accordance with laws and rules in force in India and shall be subject to the exclusive jurisdiction of the Courts in Bangalore and no other court.
              15.2. All disputes arising under or in relation to this Terms shall be referred to arbitration before a sole arbitrator. If the Parties fail to agree on the appointment of a sole arbitrator within the time stipulated under the [Indian] Arbitration and Conciliation Act, 1996 (the "Act") the Parties shall approach the competent Court under the Act for appointment of the Sole Arbitrator. The Arbitration proceedings shall be carried out in accordance with the Act and the Rules framed there under and the place of Arbitration shall be Bangalore. The arbitration proceedings shall be conducted in English. The arbitrator's award shall be final and undisputable by both Parties.
              
              16 Severability
              If any provision in the Terms become invalid or illegal or adjudged unenforceable, the provision shall be deemed to have been severed from the Terms and the remaining provisions of the Terms shall not, so far as possible, be affected by the severance.
              
              17 Waiver
              The failure of Inmeet to enforce at any time any of the provisions of this Terms shall not be construed to be a waiver of its right, power, privilege or remedy or as a waiver of any preceding or succeeding breach on Your part to this Terms nor shall any single or partial exercise of any right power privilege or remedy preclude any other or further exercise of such or any other right power privilege or remedy provided in this Terms all of which are several and cumulative and are not exclusive of each other or of any other rights or remedies otherwise available to Inmeet at law or in equity.
              
              18 Force Majeure and Act of Third Parties
              The performance of any part of this Agreement/Terms and Conditions/Policies by Inmeet and its affiliates shall be excused on account of Force Majeure events (including but not limited to act of god, public enemy, epidemics declared as pandemics, revolt, strikes, riot, terrorist attack, fire, flood, war, typhoon and any regulation of the government or order of any competent statutory or judicial authority or of any government), or any other cause beyond the reasonable control of Inmeet, or act of any third party beyond the control of Inmeet including but not limited to hacking, data theft, unauthorised access to User account, impersonation, fraud, misrepresentation and so on.
              
              19 Modification
              Inmeet may update, modify, suspend, discontinue or change any part of these Terms from time to time. The revised Terms will be posted as notification here on this link [privacy](https://inmeet.co/terms). Users are encouraged to periodically check this page to stay informed about changes to the Terms. The revised Terms will be effective from the date stated on the revised Terms. You acknowledge and agree that it is Your responsibility to review these Terms periodically and become aware of modifications. If You disagree to any of the changes to the Terms, please refrain from accessing or using the Platform. Your continued access or use or availing of the Platform following the posting of revised Terms will indicate Your acceptance and acknowledgement of the changes and You will be bound by it.
              
              20 Survival
              These Terms, and any modifications, alterations or amendments to, shall remain in full force and effect while You use the Platform and the provisions related to Intellectual Property, Representations and Warranties, Liability, Indemnity, and all other provisions which by their nature survive the termination of the Agreement shall continue to apply even after termination of this Agreement.
              `}</p>
          </div>
        </div>
        <div className='flex items-center justify-between px-4 sm:px-6 py-10 pt-16'>
          <div className='flex'>
            <Link href="/privacy"><a className="font-medium text-gray-900">Privacy</a></Link>
            <Link href="/terms"><a className="font-medium text-gray-900 ml-4">Terms</a></Link>
          </div>
          <div className='text-gray-600'>Inmeet</div>
        </div>
      </div>
    </div>
  );
}

export default terms;