import { WHATSAPP_PHONE } from '../data/travelData';
import { TourPackage, Destination, Hotel, BespokePlan } from '../types';

export function createWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}

export function getGeneralInquiryWhatsApp(): string {
  const msg = `👑 *Hello Travel With Joja Concierge!*
I would like to inquire about planning a luxury bespoke journey to Sri Lanka. Please assist me with private tours and 5-star villa recommendations.`;
  return createWhatsAppLink(msg);
}

export function getPackageWhatsApp(pkg: TourPackage, travelers = 2, month = 'Upcoming Season'): string {
  const msg = `👑 *Luxury Tour Booking Request | Travel With Joja*
━━━━━━━━━━━━━━━━━━━━
✨ *Package:* ${pkg.title} (${pkg.duration})
💰 *Estimated Rate:* $${pkg.pricePerPerson.toLocaleString()} USD per person
👥 *Travelers:* ${travelers} guests
🗓️ *Preferred Timing:* ${month}
📍 *Destinations Covered:* ${pkg.destinationsCovered.join(', ')}

Please provide private chauffeur availability, villa upgrade options, and complete day-by-day customization.`;
  return createWhatsAppLink(msg);
}

export function getDestinationWhatsApp(dest: Destination): string {
  const msg = `👑 *Destination Inquiry | Travel With Joja*
━━━━━━━━━━━━━━━━━━━━
🌴 *Destination:* ${dest.name} (${dest.sinhalaName})
✨ *Region:* ${dest.region}
🏨 *Signature Stay Interest:* ${dest.signatureStay}

I would like to incorporate ${dest.name} with luxury experiences (${dest.highlights[0]}) into my upcoming bespoke Sri Lanka itinerary.`;
  return createWhatsAppLink(msg);
}

export function getHotelWhatsApp(hotel: Hotel): string {
  const msg = `👑 *Luxury Sanctuary Reservation | Travel With Joja*
━━━━━━━━━━━━━━━━━━━━
🏨 *Hotel:* ${hotel.name}
📍 *Location:* ${hotel.location}
✨ *Category:* ${hotel.category}
💰 *Est. Nightly Rate:* $${hotel.pricePerNight} USD

Please check private villa availability and VIP booking privileges with Travel With Joja.`;
  return createWhatsAppLink(msg);
}

export function getBespokeWhatsApp(plan: BespokePlan): string {
  const msg = `👑 *Bespoke Journey Consultation | Travel With Joja*
━━━━━━━━━━━━━━━━━━━━
👤 *Guest Name:* ${plan.name || 'VIP Traveler'}
📧 *Email:* ${plan.email || 'N/A'}
📱 *Phone:* ${plan.phoneOrWhatsApp || 'N/A'}
🌴 *Destinations:* ${plan.destinations.length > 0 ? plan.destinations.join(', ') : 'Curated by Joja'}
✨ *Travel Style:* ${plan.travelStyle}
⏳ *Duration:* ${plan.duration}
👥 *Number of Travelers:* ${plan.travelers} Guests
🗓️ *Travel Month:* ${plan.month}
💎 *Special Inclusions:* ${plan.specialRequests.length > 0 ? plan.specialRequests.join(', ') : 'Standard Luxury'}
📝 *Special Notes:* ${plan.notes || 'None'}

Please curate my tailor-made luxury proposal.`;
  return createWhatsAppLink(msg);
}
