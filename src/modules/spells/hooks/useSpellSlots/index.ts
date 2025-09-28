import { useState, useMemo, useCallback } from "react";
import { CharacterClass } from "../../../basicInformation/types";
import { calculateSpellSlots, hasSpellcasting, calculatePactMagicSlots, hasPactMagic } from "../../helpers/calculateSpellSlots";
import { SpellSlotsState, PactMagicState } from "../../types";

export const useSpellSlots = (classes: CharacterClass[]) => {
  const maxSlots = useMemo(() => calculateSpellSlots(classes), [classes]);

  const pactMagicInfo = useMemo(() => calculatePactMagicSlots(classes), [classes]);

  const canCastSpells = useMemo(() => hasSpellcasting(classes), [classes]);
  const canUsePactMagic = useMemo(() => hasPactMagic(classes), [classes]);
  const [spellSlots, setSpellSlots] = useState<SpellSlotsState>(() => {
    const initialState: SpellSlotsState = {};

    for (let level = 1; level <= 9; level++) {
      const maxForLevel = maxSlots[level] || 0;
      initialState[level] = {
        level,
        max: maxForLevel,
        slots: Array(maxForLevel).fill(false),
      };
    }

    return initialState;
  });

  const [pactMagicSlots, setPactMagicSlots] = useState<PactMagicState>(() => ({
    level: pactMagicInfo.level,
    max: pactMagicInfo.slots,
    slots: Array(pactMagicInfo.slots).fill(false),
  }));
  useMemo(() => {
    setSpellSlots(prevSlots => {
      const newSlots = { ...prevSlots };

      for (let level = 1; level <= 9; level++) {
        const newMax = maxSlots[level] || 0;
        const currentSlots = newSlots[level]?.slots || [];

        const updatedSlots = Array(newMax).fill(false).map((_, index) =>
          index < currentSlots.length ? currentSlots[index] : false
        );

        newSlots[level] = {
          level,
          max: newMax,
          slots: updatedSlots,
        };
      }

      return newSlots;
    });

    setPactMagicSlots(prevPactMagic => {
      const currentSlots = prevPactMagic.slots || [];
      const updatedSlots = Array(pactMagicInfo.slots).fill(false).map((_, index) =>
        index < currentSlots.length ? currentSlots[index] : false
      );

      return {
        level: pactMagicInfo.level,
        max: pactMagicInfo.slots,
        slots: updatedSlots,
      };
    });
  }, [maxSlots, pactMagicInfo]);
  const toggleSpellSlot = useCallback((level: number, slotIndex: number) => {
    setSpellSlots(prevSlots => {
      const currentSlot = prevSlots[level];
      if (!currentSlot || slotIndex >= currentSlot.max) return prevSlots;

      const newSlots = [...currentSlot.slots];
      newSlots[slotIndex] = !newSlots[slotIndex];

      return {
        ...prevSlots,
        [level]: {
          ...currentSlot,
          slots: newSlots,
        },
      };
    });
  }, []);
  const togglePactMagicSlot = useCallback((slotIndex: number) => {
    setPactMagicSlots(prevPactMagic => {
      if (slotIndex >= prevPactMagic.max) return prevPactMagic;

      const newSlots = [...prevPactMagic.slots];
      newSlots[slotIndex] = !newSlots[slotIndex];

      return {
        ...prevPactMagic,
        slots: newSlots,
      };
    });
  }, []);
  const getAvailableSlots = useCallback((level: number): number => {
    const slot = spellSlots[level];
    return slot ? slot.slots.filter(used => !used).length : 0;
  }, [spellSlots]);
  const isSlotAvailable = useCallback((level: number, slotIndex: number): boolean => {
    const slot = spellSlots[level];
    return slot && slotIndex < slot.max ? !slot.slots[slotIndex] : false;
  }, [spellSlots]);
  const resetAllSlots = useCallback(() => {
    setSpellSlots(prevSlots => {
      const newSlots = { ...prevSlots };

      for (let level = 1; level <= 9; level++) {
        newSlots[level] = {
          ...newSlots[level],
          slots: Array(newSlots[level].max).fill(false),
        };
      }

      return newSlots;
    });

    setPactMagicSlots(prevPactMagic => ({
      ...prevPactMagic,
      slots: Array(prevPactMagic.max).fill(false),
    }));
  }, []);
  const resetPactMagicSlots = useCallback(() => {
    setPactMagicSlots(prevPactMagic => ({
      ...prevPactMagic,
      slots: Array(prevPactMagic.max).fill(false),
    }));
  }, []);
  const availableLevels = useMemo(() => {
    return Object.keys(spellSlots)
      .map(Number)
      .filter(level => spellSlots[level].max > 0)
      .sort((a, b) => a - b);
  }, [spellSlots]);

  return {
    spellSlots,
    canCastSpells,
    toggleSpellSlot,
    getAvailableSlots,
    isSlotAvailable,
    resetAllSlots,
    availableLevels,
    pactMagicSlots,
    canUsePactMagic,
    togglePactMagicSlot,
    resetPactMagicSlots,
  };
};