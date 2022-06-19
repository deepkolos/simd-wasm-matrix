(module
 (type $none_=>_none (func))
 (type $none_=>_i32 (func (result i32)))
 (type $f32_=>_none (func (param f32)))
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $none_=>_f32 (func (result f32)))
 (global $global$0 i32 (i32.const 1024))
 (global $global$1 i32 (i32.const 1216))
 (global $global$2 i32 (i32.const 1024))
 (global $global$3 i32 (i32.const 66752))
 (global $global$4 i32 (i32.const 0))
 (global $global$5 i32 (i32.const 1))
 (memory $0 2)
 (export "memory" (memory $0))
 (export "__wasm_call_ctors" (func $0))
 (export "getIn0Ptr" (func $1))
 (export "getIn1Ptr" (func $2))
 (export "getOutPtr" (func $3))
 (export "matrix4_multiply" (func $4))
 (export "matrix4_determinant" (func $5))
 (export "matrix4_invert" (func $6))
 (export "matrix4_transpose" (func $7))
 (export "matrix4_invert_transform" (func $8))
 (export "matrix4_multiply_scalar" (func $9))
 (export "matrix4_scale" (func $10))
 (export "__dso_handle" (global $global$0))
 (export "__data_end" (global $global$1))
 (export "__global_base" (global $global$2))
 (export "__heap_base" (global $global$3))
 (export "__memory_base" (global $global$4))
 (export "__table_base" (global $global$5))
 (func $0
  (nop)
 )
 (func $1 (result i32)
  (i32.const 1024)
 )
 (func $2 (result i32)
  (i32.const 1088)
 )
 (func $3 (result i32)
  (i32.const 1152)
 )
 (func $4
  (local $0 v128)
  (local $1 v128)
  (local $2 v128)
  (local $3 v128)
  (local $4 v128)
  (local $5 v128)
  (local $6 v128)
  (local $7 v128)
  (local $8 v128)
  (local $9 v128)
  (local $10 v128)
  (local $11 v128)
  (local $12 v128)
  (local $13 v128)
  (local $14 v128)
  (local $15 v128)
  (local $16 v128)
  (local.set $5
   (v128.load align=4
    (i32.const 1100)
   )
  )
  (local.set $6
   (v128.load align=8
    (i32.const 1096)
   )
  )
  (local.set $7
   (v128.load
    (i32.const 1088)
   )
  )
  (local.set $8
   (v128.load align=4
    (i32.const 1092)
   )
  )
  (local.set $9
   (v128.load align=4
    (i32.const 1116)
   )
  )
  (local.set $10
   (v128.load align=8
    (i32.const 1112)
   )
  )
  (local.set $11
   (v128.load
    (i32.const 1104)
   )
  )
  (local.set $12
   (v128.load align=4
    (i32.const 1108)
   )
  )
  (local.set $13
   (v128.load align=4
    (i32.const 1132)
   )
  )
  (local.set $14
   (v128.load align=8
    (i32.const 1128)
   )
  )
  (local.set $15
   (v128.load
    (i32.const 1120)
   )
  )
  (local.set $16
   (v128.load align=4
    (i32.const 1124)
   )
  )
  (v128.store
   (i32.const 1200)
   (f32x4.add
    (f32x4.add
     (f32x4.add
      (f32x4.mul
       (local.tee $0
        (v128.load
         (i32.const 1024)
        )
       )
       (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
        (local.tee $1
         (v128.load
          (i32.const 1136)
         )
        )
        (local.get $0)
       )
      )
      (f32x4.mul
       (local.tee $2
        (v128.load
         (i32.const 1040)
        )
       )
       (i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
        (local.get $1)
        (local.get $0)
       )
      )
     )
     (f32x4.mul
      (local.tee $3
       (v128.load
        (i32.const 1056)
       )
      )
      (i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
       (local.get $1)
       (local.get $0)
      )
     )
    )
    (f32x4.mul
     (local.tee $4
      (v128.load
       (i32.const 1072)
      )
     )
     (i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 12 13 14 15
      (local.get $1)
      (local.get $0)
     )
    )
   )
  )
  (v128.store
   (i32.const 1184)
   (f32x4.add
    (f32x4.add
     (f32x4.add
      (f32x4.mul
       (local.get $0)
       (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
        (local.get $15)
        (local.get $0)
       )
      )
      (f32x4.mul
       (local.get $2)
       (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
        (local.get $16)
        (local.get $0)
       )
      )
     )
     (f32x4.mul
      (local.get $3)
      (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
       (local.get $14)
       (local.get $0)
      )
     )
    )
    (f32x4.mul
     (local.get $4)
     (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
      (local.get $13)
      (local.get $0)
     )
    )
   )
  )
  (v128.store
   (i32.const 1168)
   (f32x4.add
    (f32x4.add
     (f32x4.add
      (f32x4.mul
       (local.get $0)
       (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
        (local.get $11)
        (local.get $0)
       )
      )
      (f32x4.mul
       (local.get $2)
       (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
        (local.get $12)
        (local.get $0)
       )
      )
     )
     (f32x4.mul
      (local.get $3)
      (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
       (local.get $10)
       (local.get $0)
      )
     )
    )
    (f32x4.mul
     (local.get $4)
     (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
      (local.get $9)
      (local.get $0)
     )
    )
   )
  )
  (v128.store
   (i32.const 1152)
   (f32x4.add
    (f32x4.add
     (f32x4.add
      (f32x4.mul
       (local.get $0)
       (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
        (local.get $7)
        (local.get $0)
       )
      )
      (f32x4.mul
       (local.get $2)
       (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
        (local.get $8)
        (local.get $0)
       )
      )
     )
     (f32x4.mul
      (local.get $3)
      (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
       (local.get $6)
       (local.get $0)
      )
     )
    )
    (f32x4.mul
     (local.get $4)
     (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
      (local.get $5)
      (local.get $0)
     )
    )
   )
  )
 )
 (func $5 (result f32)
  (local $0 v128)
  (local $1 v128)
  (local $2 v128)
  (local $3 v128)
  (local $4 v128)
  (f32x4.extract_lane 0
   (f32x4.sub
    (f32x4.add
     (local.tee $1
      (f32x4.add
       (local.tee $1
        (f32x4.mul
         (i8x16.shuffle 0 1 2 3 20 21 22 23 8 9 10 11 12 13 14 15
          (local.tee $4
           (f32x4.sub
            (f32x4.mul
             (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 4 5 6 7
              (local.tee $0
               (v128.load
                (i32.const 1024)
               )
              )
              (local.get $0)
             )
             (i8x16.shuffle 4 5 6 7 8 9 10 11 12 13 14 15 8 9 10 11
              (local.tee $1
               (v128.load
                (i32.const 1040)
               )
              )
              (local.get $1)
             )
            )
            (f32x4.mul
             (i8x16.shuffle 4 5 6 7 8 9 10 11 12 13 14 15 8 9 10 11
              (local.get $0)
              (local.get $0)
             )
             (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 4 5 6 7
              (local.get $1)
              (local.get $1)
             )
            )
           )
          )
          (local.tee $0
           (f32x4.sub
            (f32x4.mul
             (i8x16.shuffle 4 5 6 7 8 9 10 11 16 17 18 19 16 17 18 19
              (local.get $0)
              (local.tee $2
               (v128.load
                (i32.const 1056)
               )
              )
             )
             (i8x16.shuffle 12 13 14 15 12 13 14 15 20 21 22 23 24 25 26 27
              (local.get $1)
              (local.tee $3
               (v128.load
                (i32.const 1072)
               )
              )
             )
            )
            (f32x4.mul
             (i8x16.shuffle 12 13 14 15 12 13 14 15 20 21 22 23 24 25 26 27
              (local.get $0)
              (local.get $2)
             )
             (i8x16.shuffle 4 5 6 7 8 9 10 11 16 17 18 19 16 17 18 19
              (local.get $1)
              (local.get $3)
             )
            )
           )
          )
         )
         (i8x16.shuffle 12 13 14 15 24 25 26 27 4 5 6 7 0 1 2 3
          (local.tee $2
           (f32x4.sub
            (f32x4.mul
             (i8x16.shuffle 0 1 2 3 4 5 6 7 4 5 6 7 8 9 10 11
              (local.get $2)
              (local.get $2)
             )
             (i8x16.shuffle 12 13 14 15 8 9 10 11 12 13 14 15 12 13 14 15
              (local.get $3)
              (local.get $3)
             )
            )
            (f32x4.mul
             (i8x16.shuffle 12 13 14 15 8 9 10 11 12 13 14 15 12 13 14 15
              (local.get $2)
              (local.get $2)
             )
             (i8x16.shuffle 0 1 2 3 4 5 6 7 4 5 6 7 8 9 10 11
              (local.get $3)
              (local.get $3)
             )
            )
           )
          )
          (local.get $0)
         )
        )
       )
       (i8x16.shuffle 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
        (local.get $1)
        (local.get $1)
       )
      )
     )
     (i8x16.shuffle 4 5 6 7 0 1 2 3 20 21 22 23 16 17 18 19
      (local.get $1)
      (local.get $1)
     )
    )
    (f32x4.add
     (local.tee $0
      (f32x4.mul
       (i8x16.shuffle 16 17 18 19 4 5 6 7 16 17 18 19 4 5 6 7
        (local.get $4)
        (local.get $0)
       )
       (i8x16.shuffle 12 13 14 15 24 25 26 27 12 13 14 15 24 25 26 27
        (local.get $0)
        (local.get $2)
       )
      )
     )
     (i8x16.shuffle 4 5 6 7 0 1 2 3 20 21 22 23 16 17 18 19
      (local.get $0)
      (local.get $0)
     )
    )
   )
  )
 )
 (func $6
  (local $0 v128)
  (local $1 v128)
  (local $2 v128)
  (local $3 v128)
  (local $4 v128)
  (local $5 v128)
  (local $6 v128)
  (local $7 v128)
  (local $8 v128)
  (local $9 v128)
  (local $10 v128)
  (if
   (f32.ne
    (f32x4.extract_lane 0
     (local.tee $3
      (f32x4.sub
       (f32x4.add
        (local.tee $3
         (f32x4.add
          (local.tee $3
           (f32x4.mul
            (i8x16.shuffle 0 1 2 3 20 21 22 23 8 9 10 11 12 13 14 15
             (local.tee $7
              (f32x4.sub
               (f32x4.mul
                (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 4 5 6 7
                 (local.tee $1
                  (v128.load
                   (i32.const 1024)
                  )
                 )
                 (local.get $1)
                )
                (i8x16.shuffle 4 5 6 7 8 9 10 11 12 13 14 15 8 9 10 11
                 (local.tee $0
                  (v128.load
                   (i32.const 1040)
                  )
                 )
                 (local.get $0)
                )
               )
               (f32x4.mul
                (i8x16.shuffle 4 5 6 7 8 9 10 11 12 13 14 15 8 9 10 11
                 (local.get $1)
                 (local.get $1)
                )
                (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 4 5 6 7
                 (local.get $0)
                 (local.get $0)
                )
               )
              )
             )
             (local.tee $5
              (f32x4.sub
               (f32x4.mul
                (i8x16.shuffle 4 5 6 7 8 9 10 11 16 17 18 19 16 17 18 19
                 (local.get $1)
                 (local.tee $4
                  (v128.load
                   (i32.const 1056)
                  )
                 )
                )
                (i8x16.shuffle 12 13 14 15 12 13 14 15 20 21 22 23 24 25 26 27
                 (local.get $0)
                 (local.tee $2
                  (v128.load
                   (i32.const 1072)
                  )
                 )
                )
               )
               (f32x4.mul
                (i8x16.shuffle 12 13 14 15 12 13 14 15 20 21 22 23 24 25 26 27
                 (local.get $1)
                 (local.get $4)
                )
                (i8x16.shuffle 4 5 6 7 8 9 10 11 16 17 18 19 16 17 18 19
                 (local.get $0)
                 (local.get $2)
                )
               )
              )
             )
            )
            (i8x16.shuffle 12 13 14 15 24 25 26 27 4 5 6 7 0 1 2 3
             (local.tee $6
              (f32x4.sub
               (f32x4.mul
                (i8x16.shuffle 0 1 2 3 4 5 6 7 4 5 6 7 8 9 10 11
                 (local.get $4)
                 (local.get $4)
                )
                (i8x16.shuffle 12 13 14 15 8 9 10 11 12 13 14 15 12 13 14 15
                 (local.get $2)
                 (local.get $2)
                )
               )
               (f32x4.mul
                (i8x16.shuffle 12 13 14 15 8 9 10 11 12 13 14 15 12 13 14 15
                 (local.get $4)
                 (local.get $4)
                )
                (i8x16.shuffle 0 1 2 3 4 5 6 7 4 5 6 7 8 9 10 11
                 (local.get $2)
                 (local.get $2)
                )
               )
              )
             )
             (local.get $5)
            )
           )
          )
          (i8x16.shuffle 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
           (local.get $3)
           (local.get $3)
          )
         )
        )
        (i8x16.shuffle 4 5 6 7 0 1 2 3 20 21 22 23 16 17 18 19
         (local.get $3)
         (local.get $3)
        )
       )
       (f32x4.add
        (local.tee $3
         (f32x4.mul
          (i8x16.shuffle 16 17 18 19 4 5 6 7 16 17 18 19 4 5 6 7
           (local.get $7)
           (local.get $5)
          )
          (i8x16.shuffle 12 13 14 15 24 25 26 27 12 13 14 15 24 25 26 27
           (local.get $5)
           (local.get $6)
          )
         )
        )
        (i8x16.shuffle 4 5 6 7 0 1 2 3 20 21 22 23 16 17 18 19
         (local.get $3)
         (local.get $3)
        )
       )
      )
     )
    )
    (f32.const 0)
   )
   (block
    (v128.store
     (i32.const 1200)
     (i8x16.shuffle 8 9 10 11 12 13 14 15 24 25 26 27 28 29 30 31
      (local.tee $8
       (i8x16.shuffle 8 9 10 11 24 25 26 27 12 13 14 15 28 29 30 31
        (local.tee $3
         (f32x4.mul
          (f32x4.add
           (f32x4.sub
            (f32x4.mul
             (i8x16.shuffle 4 5 6 7 8 9 10 11 0 1 2 3 4 5 6 7
              (local.get $0)
              (local.get $0)
             )
             (local.tee $8
              (i8x16.shuffle 12 13 14 15 0 1 2 3 8 9 10 11 28 29 30 31
               (local.get $6)
               (local.get $5)
              )
             )
            )
            (f32x4.mul
             (i8x16.shuffle 8 9 10 11 0 1 2 3 4 5 6 7 0 1 2 3
              (local.get $0)
              (local.get $0)
             )
             (local.tee $9
              (i8x16.shuffle 8 9 10 11 12 13 14 15 0 1 2 3 4 5 6 7
               (local.get $6)
               (local.get $6)
              )
             )
            )
           )
           (f32x4.mul
            (f32x4.mul
             (i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 8 9 10 11
              (local.get $0)
              (local.get $0)
             )
             (local.tee $6
              (i8x16.shuffle 4 5 6 7 28 29 30 31 24 25 26 27 24 25 26 27
               (local.get $6)
               (local.get $5)
              )
             )
            )
            (local.tee $10
             (v128.const i32x4 0x3f800000 0xbf800000 0x3f800000 0xbf800000)
            )
           )
          )
          (local.tee $0
           (f32x4.div
            (v128.const i32x4 0x3f800000 0x3f800000 0x3f800000 0x3f800000)
            (local.get $3)
           )
          )
         )
        )
        (local.tee $6
         (f32x4.mul
          (f32x4.add
           (f32x4.sub
            (f32x4.mul
             (i8x16.shuffle 8 9 10 11 0 1 2 3 4 5 6 7 0 1 2 3
              (local.get $1)
              (local.get $1)
             )
             (local.get $9)
            )
            (f32x4.mul
             (i8x16.shuffle 4 5 6 7 8 9 10 11 0 1 2 3 4 5 6 7
              (local.get $1)
              (local.get $1)
             )
             (local.get $8)
            )
           )
           (f32x4.mul
            (f32x4.mul
             (i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 8 9 10 11
              (local.get $1)
              (local.get $1)
             )
             (local.get $6)
            )
            (local.tee $1
             (v128.const i32x4 0xbf800000 0x3f800000 0xbf800000 0x3f800000)
            )
           )
          )
          (local.get $0)
         )
        )
       )
      )
      (local.tee $0
       (i8x16.shuffle 8 9 10 11 24 25 26 27 12 13 14 15 28 29 30 31
        (local.tee $5
         (f32x4.mul
          (f32x4.add
           (f32x4.mul
            (f32x4.mul
             (i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 8 9 10 11
              (local.get $2)
              (local.get $2)
             )
             (local.tee $9
              (i8x16.shuffle 12 13 14 15 4 5 6 7 0 1 2 3 0 1 2 3
               (local.get $7)
               (local.get $7)
              )
             )
            )
            (local.get $10)
           )
           (f32x4.sub
            (f32x4.mul
             (i8x16.shuffle 4 5 6 7 8 9 10 11 0 1 2 3 4 5 6 7
              (local.get $2)
              (local.get $2)
             )
             (local.tee $10
              (i8x16.shuffle 4 5 6 7 24 25 26 27 0 1 2 3 20 21 22 23
               (local.get $5)
               (local.get $7)
              )
             )
            )
            (f32x4.mul
             (i8x16.shuffle 8 9 10 11 0 1 2 3 4 5 6 7 0 1 2 3
              (local.get $2)
              (local.get $2)
             )
             (local.tee $2
              (i8x16.shuffle 0 1 2 3 4 5 6 7 24 25 26 27 28 29 30 31
               (local.get $5)
               (local.get $7)
              )
             )
            )
           )
          )
          (local.get $0)
         )
        )
        (local.tee $1
         (f32x4.mul
          (f32x4.add
           (f32x4.mul
            (f32x4.mul
             (i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 8 9 10 11
              (local.get $4)
              (local.get $4)
             )
             (local.get $9)
            )
            (local.get $1)
           )
           (f32x4.sub
            (f32x4.mul
             (i8x16.shuffle 8 9 10 11 0 1 2 3 4 5 6 7 0 1 2 3
              (local.get $4)
              (local.get $4)
             )
             (local.get $2)
            )
            (f32x4.mul
             (i8x16.shuffle 4 5 6 7 8 9 10 11 0 1 2 3 4 5 6 7
              (local.get $4)
              (local.get $4)
             )
             (local.get $10)
            )
           )
          )
          (local.get $0)
         )
        )
       )
      )
     )
    )
    (v128.store
     (i32.const 1184)
     (i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
      (local.get $8)
      (local.get $0)
     )
    )
    (v128.store
     (i32.const 1168)
     (i8x16.shuffle 8 9 10 11 12 13 14 15 24 25 26 27 28 29 30 31
      (local.tee $0
       (i8x16.shuffle 0 1 2 3 16 17 18 19 4 5 6 7 20 21 22 23
        (local.get $3)
        (local.get $6)
       )
      )
      (local.tee $1
       (i8x16.shuffle 0 1 2 3 16 17 18 19 4 5 6 7 20 21 22 23
        (local.get $5)
        (local.get $1)
       )
      )
     )
    )
    (v128.store
     (i32.const 1152)
     (i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
      (local.get $0)
      (local.get $1)
     )
    )
   )
  )
 )
 (func $7
  (local $0 v128)
  (local $1 v128)
  (local $2 v128)
  (local $3 v128)
  (local $4 v128)
  (local $5 v128)
  (v128.store
   (i32.const 1072)
   (i8x16.shuffle 8 9 10 11 12 13 14 15 24 25 26 27 28 29 30 31
    (local.tee $2
     (i8x16.shuffle 8 9 10 11 24 25 26 27 12 13 14 15 28 29 30 31
      (local.tee $0
       (v128.load
        (i32.const 1024)
       )
      )
      (local.tee $1
       (v128.load
        (i32.const 1040)
       )
      )
     )
    )
    (local.tee $5
     (i8x16.shuffle 8 9 10 11 24 25 26 27 12 13 14 15 28 29 30 31
      (local.tee $3
       (v128.load
        (i32.const 1056)
       )
      )
      (local.tee $4
       (v128.load
        (i32.const 1072)
       )
      )
     )
    )
   )
  )
  (v128.store
   (i32.const 1056)
   (i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
    (local.get $2)
    (local.get $5)
   )
  )
  (v128.store
   (i32.const 1040)
   (i8x16.shuffle 8 9 10 11 12 13 14 15 24 25 26 27 28 29 30 31
    (local.tee $0
     (i8x16.shuffle 0 1 2 3 16 17 18 19 4 5 6 7 20 21 22 23
      (local.get $0)
      (local.get $1)
     )
    )
    (local.tee $1
     (i8x16.shuffle 0 1 2 3 16 17 18 19 4 5 6 7 20 21 22 23
      (local.get $3)
      (local.get $4)
     )
    )
   )
  )
  (v128.store
   (i32.const 1024)
   (i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
    (local.get $0)
    (local.get $1)
   )
  )
 )
 (func $8
  (local $0 v128)
  (local $1 v128)
  (local $2 v128)
  (local $3 v128)
  (local $4 v128)
  (v128.store
   (i32.const 1056)
   (local.tee $3
    (f32x4.mul
     (local.tee $1
      (f32x4.div
       (v128.const i32x4 0x3f800000 0x3f800000 0x3f800000 0x3f800000)
       (v128.bitselect
        (v128.const i32x4 0x3f800000 0x3f800000 0x3f800000 0x3f800000)
        (local.tee $1
         (f32x4.add
          (f32x4.mul
           (local.tee $3
            (i8x16.shuffle 0 1 2 3 8 9 10 11 24 25 26 27 28 29 30 31
             (i8x16.shuffle 8 9 10 11 12 13 14 15 24 25 26 27 28 29 30 31
              (local.tee $2
               (v128.load
                (i32.const 1024)
               )
              )
              (local.tee $1
               (v128.load
                (i32.const 1040)
               )
              )
             )
             (local.tee $0
              (v128.load
               (i32.const 1056)
              )
             )
            )
           )
           (local.get $3)
          )
          (f32x4.add
           (f32x4.mul
            (local.tee $2
             (i8x16.shuffle 0 1 2 3 8 9 10 11 16 17 18 19 28 29 30 31
              (local.tee $1
               (i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                (local.get $2)
                (local.get $1)
               )
              )
              (local.get $0)
             )
            )
            (local.get $2)
           )
           (f32x4.mul
            (local.tee $0
             (i8x16.shuffle 4 5 6 7 12 13 14 15 20 21 22 23 28 29 30 31
              (local.get $1)
              (local.get $0)
             )
            )
            (local.get $0)
           )
          )
         )
        )
        (f32x4.lt
         (local.get $1)
         (v128.const i32x4 0x322bcc77 0x322bcc77 0x322bcc77 0x322bcc77)
        )
       )
      )
     )
     (local.get $3)
    )
   )
  )
  (v128.store
   (i32.const 1040)
   (local.tee $4
    (f32x4.mul
     (local.get $1)
     (local.get $0)
    )
   )
  )
  (v128.store
   (i32.const 1024)
   (local.tee $2
    (f32x4.mul
     (local.get $1)
     (local.get $2)
    )
   )
  )
  (v128.store
   (i32.const 1072)
   (f32x4.sub
    (v128.const i32x4 0x00000000 0x00000000 0x00000000 0x3f800000)
    (f32x4.add
     (f32x4.mul
      (i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
       (local.tee $0
        (v128.load
         (i32.const 1072)
        )
       )
       (local.get $0)
      )
      (local.get $3)
     )
     (f32x4.add
      (f32x4.mul
       (i8x16.shuffle 0 1 2 3 0 1 2 3 0 1 2 3 0 1 2 3
        (local.get $0)
        (local.get $0)
       )
       (local.get $2)
      )
      (f32x4.mul
       (i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
        (local.get $0)
        (local.get $0)
       )
       (local.get $4)
      )
     )
    )
   )
  )
 )
 (func $9 (param $0 f32)
  (local $1 v128)
  (v128.store
   (i32.const 1024)
   (f32x4.mul
    (local.tee $1
     (f32x4.splat
      (local.get $0)
     )
    )
    (v128.load
     (i32.const 1024)
    )
   )
  )
  (v128.store
   (i32.const 1040)
   (f32x4.mul
    (local.get $1)
    (v128.load
     (i32.const 1040)
    )
   )
  )
  (v128.store
   (i32.const 1056)
   (f32x4.mul
    (local.get $1)
    (v128.load
     (i32.const 1056)
    )
   )
  )
  (v128.store
   (i32.const 1072)
   (f32x4.mul
    (local.get $1)
    (v128.load
     (i32.const 1072)
    )
   )
  )
 )
 (func $10 (param $0 i32) (param $1 i32)
  (v128.store
   (local.get $0)
   (f32x4.mul
    (v128.load
     (local.get $0)
    )
    (v128.load32_splat
     (local.get $1)
    )
   )
  )
  (v128.store offset=16
   (local.get $0)
   (f32x4.mul
    (v128.load offset=16
     (local.get $0)
    )
    (v128.load32_splat offset=4
     (local.get $1)
    )
   )
  )
  (v128.store offset=32
   (local.get $0)
   (f32x4.mul
    (v128.load offset=32
     (local.get $0)
    )
    (v128.load32_splat offset=8
     (local.get $1)
    )
   )
  )
 )
 ;; custom section ".debug_info", size 2249
 ;; custom section ".debug_loc", size 3168
 ;; custom section ".debug_ranges", size 88
 ;; custom section ".debug_abbrev", size 452
 ;; custom section ".debug_line", size 132
 ;; custom section ".debug_str", size 740
 ;; custom section "producers", size 52
 ;; features section: simd
)
