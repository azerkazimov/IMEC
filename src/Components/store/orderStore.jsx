import { create } from "zustand";

const useOrderStore = create((set) => ({
  order: [],
  addToOrder: (product) =>
    set((state) => {
      const existingProductIndex = state.order.findIndex(
        (prod) => prod.id === product.id
      );
      switch (existingProductIndex) {
        case -1:
          return { order: [...state.order, product] };
        default: {
          const updatedOrder = [...state.order];
          updatedOrder[existingProductIndex].quantity += product.quantity || 1;
          return { order: updatedOrder };
        }
      }
    }),
  removeFromOrder: (productId) =>
    set((state) => ({
      order: state.order.filter((prod) => prod.id !== productId),
    })),
  clearOrder: () => set({ order: [] }),
}));

export default useOrderStore;
