import { FormEvent, useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { DateTime } from "luxon";
import FadeInScrollWrapper from "../fadeInScrollWrapper";

interface Ucapan {
  id: string;
  nama: string;
  pesan: string;
  kehadiran: "hadir" | "tidakHadir" | "ragu";
  createdAt: any;
}

const Comments = () => {
  const [ucapans, setUcapans] = useState<Ucapan[]>([]);
  const ucapanSorted = ucapans.sort(
    (a, b) => b.createdAt?.toDate().getTime() - a.createdAt?.toDate().getTime()
  );

  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [kehadiran, setKehadiran] = useState<"hadir" | "tidakHadir" | "ragu">(
    "ragu"
  );

  const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ucapanRef = collection(db, "ucapan");

  useEffect(() => {
    // Realtime updates
    const unsubscribe = onSnapshot(ucapanRef, (snapshot) => {
      const ucapanList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Ucapan[];
      setUcapans(ucapanList);
    });
    return () => unsubscribe();
  }, []);

  const addUcapan = async () => {
    const res = await addDoc(ucapanRef, {
      nama,
      pesan,
      kehadiran,
      createdAt: serverTimestamp(),
    });
    console.log({ res });

    setNama("");
    setPesan("");
  };

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();

      setIsLoading(true);
      await addUcapan();

      setShowFeedbackMessage(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (showFeedbackMessage) {
      timeout = setTimeout(() => {
        setShowFeedbackMessage(false);
      }, 8000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [showFeedbackMessage]);

  return (
    <FadeInScrollWrapper>
      <div className="mt-12 border-gray-300 flex flex-col gap-6 font-cormorant-garamond pt-6 mx-4 rounded-4xl shadow-lg overflow-hidden">
        <h1 className="text-4xl text-center">
          Ucapan <span className="font-allison text-3xl">Dan</span> Do'a
        </h1>

        <form
          onSubmit={handleSubmit}
          className="font-ibm-plex-sans border-gray-300 px-10"
        >
          <input
            placeholder="Nama"
            className="py-3 border-b border-gray-300 w-full px-4"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
          <textarea
            placeholder="Pesan"
            className="py-3 border-b border-gray-300 w-full px-4 hover:ring-0 active:ring-0 focus:ring-0"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            required
          />
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <input
                id="hadir"
                type="radio"
                name="kehadiran"
                value="hadir"
                checked={kehadiran === "hadir"}
                onChange={(e) => setKehadiran(e.target.value as "hadir")}
              />
              <label htmlFor="hadir" className="text-sm">
                Hadir
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                id="tidakHadir"
                type="radio"
                name="kehadiran"
                value="tidakHadir"
                checked={kehadiran === "tidakHadir"}
                onChange={(e) => setKehadiran(e.target.value as "tidakHadir")}
              />
              <label htmlFor="tidakHadir" className="text-sm">
                Tidak hadir
              </label>
            </div>
          </div>
          {showFeedbackMessage && (
            <div className="text-center text-sm font-semibold text-emerald-500 mt-8">
              Terima kasih! Pesan telah terkirim.
            </div>
          )}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-black py-2 px-4 rounded-full text-white uppercase text-[0.7rem] disabled:opacity-80"
            >
              Kirim
            </button>
          </div>
        </form>

        {/* Ucapans */}
        <div className="pt-2">
          <h6 className="font-ibm-plex-sans text-xs font-semibold text-zinc-700 text-right px-6 pb-4 border-b border-gray-300">
            Total : {ucapanSorted.length}
          </h6>
          <div className="w-full max-h-60 overflow-y-auto">
            {ucapanSorted.map((ucapan) => (
              <div
                key={ucapan.id}
                className="flex gap-4 border-b border-gray-300 w-full px-4"
              >
                <div className="shrink-0 pt-5">
                  <img src="/icon-user.png" className="size-4 object-contain" />
                </div>
                <div className="font-ibm-plex-sans space-y-px py-4 w-full">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-bold">{ucapan.nama}</div>

                    {ucapan.kehadiran !== "ragu" && (
                      <div className="border border-gray-300 rounded-full px-2 py-px text-[0.55rem] font-semibold shrink-0">
                        {ucapan.kehadiran === "tidakHadir"
                          ? "Tidak Hadir"
                          : "Hadir"}
                      </div>
                    )}
                  </div>
                  <p className="text-sm mb-1">{ucapan.pesan}</p>
                  <div className="text-[0.7rem]">
                    {DateTime.fromJSDate(ucapan.createdAt?.toDate())
                      .setLocale("id")
                      .toRelative()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInScrollWrapper>
  );
};

export default Comments;
