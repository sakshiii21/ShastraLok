import React, { useState } from 'react';
import { Client } from "@gradio/client";

const AIIntegration = () => {
  const [prompt, setPrompt] = useState("for ex. ");
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const steps = 25;
  const width = 512;
  const height = 512;
  const seed = 0;
  const randomizeSeed = false;

  // Keywords to validate relevant prompts
  const allowedKeywords = [
    "veda", "rigveda", "samaveda", "yajurveda", "atharvaveda", "upanishad", "shastra", "scripture",
    "ramayana", "mahabharata", "bhagavad gita", "bhagavadgita", "krishna", "rama", "hanuman",
    "sita", "lakshmana", "bharata", "shatrughna", "arjuna", "bhima", "nakula", "sahadeva", "draupadi",
    "karna", "duryodhana", "ashwatthama", "vedavyasa", "sanskrit", "yajna", "homa", "havans", "ritual",
    "agni", "indra", "varuna", "vayu", "brahma", "vishnu", "shiva", "mahadeva", "rudra", "parvati",
    "lakshmi", "saraswati", "ganesha", "kartikeya", "narayana", "nandi", "surya", "chandra", "shani",
    "rahu", "ketu", "rishi", "sage", "muni", "guru", "acharya", "vyasa", "valmiki", "vashistha", "bharadwaj",
    "agastya", "narada", "kapila", "jamadagni", "kashyapa", "kanva", "gautama", "atrI", "matanga", "markandeya",
    "daksha", "dattatreya", "manu", "saptarishi", "ashram", "tapasya", "meditation", "dhyana", "samadhi",
    "mantra", "sloka", "shloka", "hymn", "chant", "recitation", "spiritual", "karma", "moksha", "dharma",
    "artha", "kama", "brahman", "atman", "purusha", "prakriti", "maya", "avidya", "jnana", "bhakti",
    "kirtan", "stotra", "stuti", "puja", "temple", "mandir", "murti", "idol", "sannidhi", "tirtha", "pilgrimage",
    "kumbh", "prayag", "haridwar", "kashi", "ayodhya", "mathura", "vrindavan", "dwarka", "kurukshetra",
    "ganga", "yamuna", "sarasvati", "triveni", "mount meru", "himalaya", "kailasa", "trishula", "chakra",
    "shankha", "gada", "bow", "arrow", "sudarshana", "kundalini", "chakra system", "yogi", "sannyasi",
    "bhikshu", "hermit", "forest hermitage", "ancient india", "vedic era", "vedic dress", "vedanga",
    "nirukta", "shiksha", "chandas", "vyakarana", "kalpa", "jyotisha", "ashtanga yoga", "yama", "niyama",
    "asana", "pranayama", "pratyahara", "dharana", "samadhi", "kosha", "pancha kosha", "tattva", "bhuta",
    "panchabhuta", "fire ritual", "agnihotra", "churning of ocean", "samudra manthan", "amrit", "garuda",
    "naga", "serpent", "ananta", "shesha", "tridev", "trinity", "devi", "durga", "kali", "sati", "dakshina",
    "chamunda", "mahishasura", "rakshasa", "asura", "danava", "daitya", "yaksha", "gandharva", "apsara",
    "celestial", "cosmos", "creation hymn", "nasadiya sukta", "purusha sukta", "rudram", "chanting", "vedic sage",
    "vedic altar", "fire pit", "vedic sacrifice", "vedic cosmology", "antariksha", "bhu", "svarga", "lokas",
    "brahmaloka", "patala", "netherworld", "triloka", "tripura", "navagraha", "sanskrit verse", "ancient text",
    "divine weapon", "brahmastra", "pashupatastra", "vajra", "nagastra", "divine war", "mythical battle",
    "kurukshetra war", "ayodhya palace", "dwaraka city", "vanavasa", "forest exile", "guru parampara",
    "lineage", "oral tradition", "shruti", "smriti", "puranas", "itihasa", "bhakti movement", "japa mala",
    "tilaka", "rudraksha", "kamandalu", "mystic", "hermitage", "celestial beings", "ritual chants", "vedic lifestyle", "primordial", "cosmic order", "sacred geometry", "mandala", "yantra", "siddhi", "spiritual attainment", "enlightenment", "divine grace", "bhakti yoga", "jnana yoga", "karma yoga", "raja yoga", "hatha yoga", "tantra", "manipura", "svadhisthana", "ajna chakra", "bindu", "shakti", "shaktipat"
  , "shaktism", "shaivism", "vaishnavism", "shaktidhar", "bhagavata dharma", "sankhya", "yogic philosophy", "vedanta", "advaita", "dvaita", "vishishtadvaita", "tattvavada", "siddhanta", "darshana", "philosophy", "spirituality", "vedic astrology", "jyotish shastra", "horoscope", "kundali", "nakshatra", "zodiac", "graha", "planetary influence", "dasha", "transit", "retrograde", "muhurta", "electional astrology", "nadi astrology", "prashna", "horary astrology", "panchanga", "tithi", "nakshatra yoga", "shubh muhurta", "vedic numerology", "sankhya shastra", "numerical symbolism"
  , "vedic medicine", "ayurveda", "herbal remedies", "panchakarma", "dosha", "vata", "pitta", "kapha", "sattva", "rajas", "tamas", "prana", "life force", "chakras", "nadis", "marma points", "shirodhara", "abhyanga", "swedana", "shamana", "shodhana", "rasayana", "vajikarana"
  ];
  

  const isPromptValid = (text) => {
    const lower = text.toLowerCase();
    return allowedKeywords.some(keyword => lower.includes(keyword));
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setImageUrl(null);
    setError(null);

    if (!isPromptValid(prompt)) {
      setError("Please enter a prompt related to Vedas, Shastras, or ancient scriptures.");
      return;
    }

    setIsLoading(true);

    try {
      const client = await Client.connect("black-forest-labs/FLUX.1-schnell");
      const response = await client.predict("/infer", {
        prompt,
        seed,
        randomize_seed: randomizeSeed,
        width,
        height,
        num_inference_steps: steps,
      });

      if (Array.isArray(response.data) && response.data[0]?.url) {
        setImageUrl(response.data[0].url);
      } else {
        throw new Error("Invalid response format: image URL not found");
      }
    } catch (err) {
      console.error("Error generating image:", err);
      setError(err.message || "An error occurred while generating the image");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#F4E4BA] min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-[#1E1006] text-[#FED141] rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Scripture Image Generator</h2>

        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label htmlFor="prompt" className="block mb-2 text-[#B86F25] font-semibold">Describe a Vedic scene or concept:</label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={3}
              className="w-full p-2 rounded bg-[#F4E4BA] text-[#1E1006] border border-[#B86F25]"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 rounded font-bold transition ${
              isLoading
                ? "bg-[#B86F25] cursor-wait"
                : "bg-[#FED141] text-[#1E1006] hover:bg-[#e3b719] cursor-pointer"
            }`}
          >
            {isLoading ? "Generating..." : "Generate Image"}
          </button>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-100 text-red-800 rounded">
            <h3 className="font-bold">Error:</h3>
            <p>{error}</p>
          </div>
        )}

        {imageUrl && (
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2 text-[#FED141]">Generated Image:</h3>
            <img
              src={imageUrl}
              alt="Generated by FLUX.1-schnell"
              className="w-full border border-[#FED141] rounded"
            />
            <div className="mt-2">
              <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="text-[#FED141] underline">
                Open image in new tab
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIIntegration;
