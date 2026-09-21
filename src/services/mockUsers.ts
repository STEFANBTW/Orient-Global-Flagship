// 5 Registered Mock Nigerian Users for Consumer Testing
export interface MockConsumerUser {
  id: string;
  name: string;
  email: string;
  phone: string; // Starts with +234
  avatar: string;
  deliveryAddress: string;
  hasActiveOrder?: boolean;
}

export const MOCK_NIGERIAN_USERS: MockConsumerUser[] = [
  {
    id: "usr_chijioke_01",
    name: "Chijioke Adeleke",
    email: "chijioke.adeleke@example.ng",
    phone: "+234 802 345 6789",
    avatar: "CA",
    deliveryAddress: "Plot 14, Victoria Island, Lagos",
    hasActiveOrder: true
  },
  {
    id: "usr_amina_02",
    name: "Amina Bello",
    email: "amina.bello@example.ng",
    phone: "+234 803 456 7890",
    avatar: "AB",
    deliveryAddress: "Suite 4, Maitama District, Abuja",
    hasActiveOrder: false
  },
  {
    id: "usr_emeka_03",
    name: "Emeka Okafor",
    email: "emeka.okafor@example.ng",
    phone: "+234 805 567 8901",
    avatar: "EO",
    deliveryAddress: "18 New Haven Road, Enugu",
    hasActiveOrder: false
  },
  {
    id: "usr_fatima_04",
    name: "Fatima Dangote",
    email: "fatima.dangote@example.ng",
    phone: "+234 807 678 9012",
    avatar: "FD",
    deliveryAddress: "12 Bompai GRA, Kano",
    hasActiveOrder: false
  },
  {
    id: "usr_tunde_05",
    name: "Tunde Bakare",
    email: "tunde.bakare@example.ng",
    phone: "+234 809 789 0123",
    avatar: "TB",
    deliveryAddress: "Bodija Estate, Ibadan, Oyo State",
    hasActiveOrder: false
  }
];

const STORAGE_KEY = "orient_active_consumer_user";

export const getMockUsers = (): MockConsumerUser[] => {
  return MOCK_NIGERIAN_USERS;
};

export const getActiveConsumerUser = (): MockConsumerUser => {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const found = MOCK_NIGERIAN_USERS.find(u => u.id === parsed.id);
        if (found) return found;
      }
    } catch (e) {}
  }
  return MOCK_NIGERIAN_USERS[0]; // Default to Chijioke Adeleke
};

export const setActiveConsumerUser = (user: MockConsumerUser): void => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      window.dispatchEvent(new CustomEvent("orient_consumer_user_changed", { detail: user }));
    } catch (e) {}
  }
};
